const nodemailer = require("nodemailer");
const MailerService = {};
const config = {
  recoverylink: "WWW",
};

MailerService.sendMail = async (userEmail) => {
  const email = "oscarmorales.fullstackdeveloper@gmail.com";
  const name = "TaskMaster";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email, // Cambialo por tu email
      pass: "yjscyvohrpxhpvif", // Cambialo por tu password
    },
  });
  const mailOptions = {
    from: `”🔑 ${name}  💉 🧪  🧬 ” <${email}>`,
    to: userEmail, // Cambia esta parte por el destinatario
    subject: "Recordatorio",
    attachments: [],
    html: `
<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
    
    <tr>
        <td style="background-color: #ecf0f1">
            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                <h2 style="color: #6c757d; margin: 0 0 7px"> 
                Hola podrias hacer click en el siguiente link para recuperar tu contraceña :  </h2>
                <br>
                <p style="color: #007bff;margin: 2px; font-size: 16px;"  align="justify"  >
                        Hola 
                   ${userEmail}</p>
                   este es un recodatorio
                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: justify">
                    
                </div>
                <div style="width: 100%; text-align: center">
                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="${config.recoverylink}?email=${userEmail}">Ir a la página</a>   
                </div>
                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0"> <a href="https://pixelvision.com.mx">By Ing. Oscar Morales 2022</a>  </p>
            </div>
        </td>
    </tr>
</table>        
  `,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    //else console.log(info);
    //https://www.linkedin.com/in/oscar-morales-garcia-developer/
  });
};

MailerService.sendMailCustomize = async (params) => {
  var email = "oscarmorales.fullstackdeveloper@gmail.com";
  var name = "Urdilab";
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email, // Cambialo por tu email
      pass: "M0r4l3x.251", // Cambialo por tu password
    },
  });
  const mailOptions = {
    //from: `”${formulario.nombre}  👻 💉 🧪 🔬 🧬 ” <${formulario.email}>`,
    from: `”🔑 ${name}  💉 🧪  🧬 ” <${email}>`,
    to: params.destinatario, // Cambia esta parte por el destinatario
    subject: params.asunto,

    attachments: [
      /*{
            filename: 'swagger.yaml',
            path: '/Users/moralex/Documents/bitbucket/urdilab-api/swagger/',
            cid: 'omg@cognizant.mo' //same cid value as in the html img src
        } */
    ],
    html: `
<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
    
    <tr>
        <td style="background-color: #ecf0f1">
            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                <h2 style="color: #6c757d; margin: 0 0 7px">${params.mensaje} !</h2>
                <p style="color: #007bff;margin: 2px; font-size: 18px;"  align="justify"  >
                   ${params.short_description}</p>
                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: justify">
                    ${params.description}
                </div>
                <div style="width: 100%; text-align: center">
                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="${params.url}">Ir a la página</a>   
                </div>
                <!--<img src="omg@cognizant.mo"/>-->
                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0"> <a href="https://pixelvision.com.mx">By Ing. Oscar Morales 2020</a>  </p>
            </div>
        </td>
    </tr>
</table>        
  `,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    //else console.log(info);
    //https://www.linkedin.com/in/oscar-morales-garcia-developer/
  });
};

// module.exports = (formulario) => {
//     //console.log('formulario: ', formulario)
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'oscarmorales.920702@gmail.com', // Cambialo por tu email
//             pass: 'Moralex.251' // Cambialo por tu password
//         }
//     });
//     const mailOptions = {
//         //from: `”${formulario.nombre} 👻” <${formulario.email}>`,
//         from: formulario.email,
//         to: formulario.destinatario, // Cambia esta parte por el destinatario
//         subject: formulario.asunto,

//         attachments: [{
//             filename: 'cognizant_logo.png',
//             path: '/Users/oscarmoralesgarcia/Documents/nodejsprojects/dispatcherbot/api/image/',
//             cid: 'omg@cognizant.mo' //same cid value as in the html img src
//         }],
//         html: `
// <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

//     <tr>
//         <td style="background-color: #ecf0f1">
//             <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
//                 <h2 style="color: #6c757d; margin: 0 0 7px">${formulario.mensaje} !</h2>
//                 <p style="color: #007bff;margin: 2px; font-size: 18px;"  align="justify"  >
//                    ${ formulario.obj.short_description}</p>
//                 <div style="width: 100%;margin:20px 0; display: inline-block;text-align: justify">
//                     ${formulario.obj.description}
//                 </div>
//                 <div style="width: 100%; text-align: center">
//                     <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="${formulario.url}">Ir a la página</a>
//                 </div>
//                 <img src="omg@cognizant.mo"/>
//                 <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0"> <a href="https://pixelvision.com.mx">By Ing. Oscar Morales 2019</a>  </p>
//             </div>
//         </td>
//     </tr>
// </table>
//   `
//     };
//     transporter.sendMail(mailOptions, function (err, info) {
//         if (err) console.log(err)
//         //else console.log(info);
//         //https://www.linkedin.com/in/oscar-morales-garcia-developer/
//     });
// }

module.exports = MailerService;
