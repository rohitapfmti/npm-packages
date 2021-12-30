Step1: Create div tag in your html file with some id
` <div id="apModal" style="display:none">`

Step2: Install NPM module in your project
  npm install fmti-modal-window
  
Step3: Import package in your js file
import fmtiModalWindow from 'fmti-modal-window';

step4: Then play around this. By default it will hidden, you Can write
  code according to your need, Here I am giving exapmle for button click
 eg:  
   document.getElementById("apModal").addEventListener("click",()=>{
       
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
                                "enable": true,
                                "text": "Delete",
                                "onclick": "DESTROY"
                              },
                     }

       });
    Step4: Step 3 just create modal window and setup your dom but keeps it hidden for now
             To display Modal window promise need to be resolved....
              modalwindow.then((data)=>{
                    if(data.success){
                       ro.openModal(data.controllerId);
                    }
              }).catch((err)=>{
                     console.log("err",err);
              });
    }); 
    
    Step5: There are 2 buttons in popup 
      leftbutton(id = FMTI-MODAL-BTN-LEFT) & rightbutton (id = FMTI-MODAL-BTN-RIGHT)
      
    Step6: destroyModal is used to destroy the modal window
      for this you need to paas id of modal window
      eg:  modalwindow.destroyModal("apModal");
      
    Step7: If you display checkbox in the bottom and want to handle on check/uncheck enable/disable button
        These can be done with buttons ID & 
        leftbutton(id = FMTI-MODAL-BTN-LEFT) & rightbutton (id = FMTI-MODAL-BTN-RIGHT)
        enableButton() & disableButton()
        
        const onCheckboxHandler = ()=>{
             modalwindow.enableButton("FMTI-MODAL-BTN-RIGHT"); //id of button is passed
        }
        const onUncheckHandler = ()=>{
           modalwindow.disableButton("FMTI-MODAL-BTN-RIGHT"); //id of button is passed
        }

      
       
