import fmtiModalWindow from 'fmti-modal-window';

//Method If Button clicked
const onDeletion = ()=>{
   setTimeout(()=>{
      alert("Test API");
      alert("You clicked me!!");
   },3000);
}

//On CheckBox Checked
const onCheckboxHandler = ()=>{
   fmtiModalWindow.enableButton("FMTI-MODAL-BTN-RIGHT");
}
//Checkbox Unchecked Handler
const onUncheckHandler = ()=>{
   fmtiModalWindow.disableButton("FMTI-MODAL-BTN-RIGHT");
}

const data = ()=>{
    document.getElementById("domRl").addEventListener("click",()=>{
      //Initialization Of Modal Window
      const modalwindow =  fmtiModalWindow.init({
      modalWindowId: "apModal",
      headerInfo:{
                  showTitle: true,
                  text: "Purpose Of Our Life"
                },
      bodyContentInfo:{
                text: "The purpose of life is to contribute in some way to making things better",
                actions: [{ // optional: It displays checkbox in the body just above footer
                          type: "CHECKBOX", 
                          text: "Yes, Its True", //Any Random Text
                          id: "lifeQuote", //Checkbox input element id
                          value: true, // Check.Uncheck value is true/false
                          onCheck: onCheckboxHandler,// function Reference
                          onUnCheck: onUncheckHandler//function Reference
                      }]
      },
       footerInfo:{
                    btnLeft: {
                      "show": true,
                      "enable": true,
                      "text": "Cancel",
                      "onclick": "DESTROY"
                    },
                    btnRight: {
                      "show": true,
                      "enable": false,
                      "text": "Delete",
                      "onclick": onDeletion
                    },
           }

         });
         //Promise Subscription 
         modalwindow.then((data)=>{
            if(data.success){
               //Open Modal Window
               fmtiModalWindow.openModal(data.controllerId);
            }
            }).catch((err)=>{
                  console.log("err",err);
            });

       
       });
};
data();
