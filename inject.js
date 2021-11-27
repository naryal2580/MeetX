const automute = () => {
    let speakers = document.getElementsByClassName("IisKdb u5mc1b BbJhmb YE1TS MNVeFb kT2pkb");
    for(let i=0; i<speakers.length; i++){
        speakers[i].click();
        setTimeout(() => {
            let spans = document.getElementsByTagName("span");
            for(let j=0; j<spans.length; j++){
                if(spans[j].innerText=="Mute"){
                    spans[j].click()
                }
            }
        }, 1000);
    }
}

// TODO: no_join_input

setInterval(automute, 1000);
