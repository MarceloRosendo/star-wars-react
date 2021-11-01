
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';


export default function SpaceShipDriverForm () {
    // mude aqui o numero de itens no historico
    const maxOfMessagesOnHistory = 10;

    useEffect(() => {
        onload()
    });

    var msg
    var utterance
    const onload = () => {
        if ('speechSynthesis' in window) {
            doSpeechSynthesis();
        } else {
            msg = document.createElement('h5');
            msg.textContent = "Detected no support for Speech Synthesis";
            msg.style.textAlign = 'center';
            msg.style.backgroundColor = 'red';
            msg.style.color = 'white';
            msg.style.marginTop = msg.style.marginBottom = 0;
            document.body.insertBefore(msg, document.querySelector('#SpeechSynthesis'));
        }
    }
    const doSpeechSynthesis = () => {
        var synth = speechSynthesis;
        var flag = false;

        if (synth.speaking) {
            flag = false;
            synth.cancel();
        }

        var playEle = document.querySelector('#speechplay');

        /* click event handlers for the buttons */
        playEle.addEventListener('click', onLaunch);

        var voices = [];

        populateVoiceList();

        function populateVoiceList () {
            voices = synth.getVoices().sort(function (a, b) {
                const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
                if (aname < bname)
                    return -1;
                else if (aname == bname)
                    return 0;
                else
                    return +1;
            });
        }

        function onLaunch () {
            if (!flag) {
                flag = true;
                const name = document.getElementById('jediName').value
                const spaceShip = document.getElementById('jediSpeceshipName').value
                const messageToSpeak = `Atenção, o piloto ${name} da nave ${spaceShip} está decolando`;
                utterance = new SpeechSynthesisUtterance(messageToSpeak);

                utterance.voice = voices[20];

                utterance.onend = () => {
                    flag = false;
                    // save on localstorage
                    saveOnLocalStorage(messageToSpeak)
                }
                synth.speak(utterance);

                let r = setInterval(() => {
                    if (!speechSynthesis.speaking) {
                        clearInterval(r);
                    } else {
                        speechSynthesis.resume();
                    }
                }, 14000);
            }
            if (synth.paused) {
                synth.resume();
            }
        }
    }
    const saveOnLocalStorage = (content) => {
        var history = localStorage.getItem('history')
        if (history) {
            history = JSON.parse(history)
            if (history.length > maxOfMessagesOnHistory) {
                history.shift()
            }
        } else {
            history = []
        }
        history.push(content)
        localStorage.setItem('history', JSON.stringify(history));
    }
    return (
        <Stack spacing={1} direction="column">
            <TextField
                id="jediName"
                label="Nome Jedi"
                defaultValue="Han Solo"
                variant="filled"
                size="small"
            />
            <TextField
                id="jediSpeceshipName"
                label="Nome Jedi"
                defaultValue="Millennium Falcon"
                variant="filled"
                size="small"
            />
            <Button id='speechplay' variant="contained">Decolar</Button>
        </Stack>)
}