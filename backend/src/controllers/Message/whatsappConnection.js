const {app, BrowserWindow, ipcMain,remote} = require('electron');
const express = require("express");
let mainWindow

app.on('ready', function(){

    var ex = express();

    mainWindow = new BrowserWindow();
    ipcMain.on("Para",(event,arg)=>{
        if(arg,status){
            console.log("ms")
            mainWindow.hide();
        }
    });

    ex.get("/whats/:num/:msg",function(req,res){
        var numero = req.params.num;
        var msg = req.params.msg;
        enviar(numero,msg);
        res.send("enviando msg...")
    });

    function enviar(telefone,mensagem){

        mainWindow.loadURL("https://web.whatsapp.com/send?phone="+telefone+"&text"+mensagem);
        mainWindow.webContents.executeJavaScript('var{ipcRenderer,remote} = require("electron"); var enviado = false; function tempo(){ var btsend = document.getElementsByClassName("_35EW6")[0]; var inputSend = document.getElementsByClassName("_251VP")[0]; if(typeof inputSend !== "undefined" && inputSend.textContent && !enviado){ btsend.click(); enviado = true; }else if(enviado){ /* cancelar */ ipcRenderer.send("para",{status:true}0; enviado = false; } } setInterval(tempo,3000);');

    }

    ex.listen(3400);
    
});