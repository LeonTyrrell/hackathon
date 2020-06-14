//const accountSid = 'AC21e231d899595d7f57cf38c2448cc6a5'; 
//const authToken = '5aec6aacb6158be4dc575b5b64695bc7'; 
const accountSid = 'AC21e231d899595d7f57cf38c2448cc6a5';
const authToken = '5aec6aacb6158be4dc575b5b64695bc7';
const client = require('twilio')(accountSid, authToken);


module.exports = {
    async sendWhats(request, response) {
        const { telefone, mensagem, telefone2, mensagem2 } = request.body;
        await client.messages 
            .create({
                body: 'mensagem' + mensagem,
                from: 'whatsapp:+14155238886',       
                to: 'whatsapp:' + telefone  
            }) 
            .then(message => console.log(message.sid)) 
            .done();
        return response.status(200).json({ "teste": "concluido" })
    } 
};



























//const {app, BrowserWindow, ipcMain,remote} = require('electron');
//let mainWindow

//const {appp, BrowserWindow, ipcMain,remote} = require('electron');

/*appp.on('ready', function(){        
    mainWindow = new BrowserWindow();
    ipcMain.on("Para",(event,arg)=>{
        if(arg,status){
            console.log("ms")
            mainWindow.hide();
        }
    });
*/










/*


module.exports = {
    sendWhats(request,response) {


        const { telefone, mensagem } = request.params;
        //enviar(numero,msg);
        //res.send("enviando msg...")
        mainWindow.loadURL("https://web.whatsapp.com/send?phone="+telefone+"&text"+mensagem);
        mainWindow.webContents.executeJavaScript('var{ipcRenderer,remote} = require("electron"); var enviado = false; function tempo(){ var btsend = document.getElementsByClassName("_35EW6")[0]; var inputSend = document.getElementsByClassName("_251VP")[0]; if(typeof inputSend !== "undefined" && inputSend.textContent && !enviado){ btsend.click(); enviado = true; }else if(enviado){ /* cancelar *//* ipcRenderer.send("para",{status:true}0; enviado = false; } } setInterval(tempo,3000);');

        return response.status(200).json({ "Message": "Enviado com sucesso!"})
    }
};
*/