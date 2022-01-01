# Overlay Modal Window / Popup
## Installation
Install FMTI Modal Window using below command
`npm install fmti-modal-window --save`
  [ ] Step 1: Add div tag in your html file as below
```html
<div id="apModal" style="display:none"></div>
Note: id This can be any string
```
  [ ] Step 2: Import package
```js
    import fmtiModalWindow from 'fmti-modal-window';
```
 [ ] Step 3: Intialize Modal Window using
```js
  #Below are the properties exist in modal window
  const modalwindow =  fmtiModalWindow.init({
    containerStyle:{}, //Modal window container style
    headerInfo:{
       showTitle: true, /true, false
       text: "The Purpose of our lives",
       style:{} //Style can be given in for header text etc
    },
    bodyContentInfo:{
       text: "Everyone thinks of changing the world, but no one thinks of changing himself",
       style:{}, // body context text style 
       secondary:[{ // Secondary text after body text
          text: "Life is either a great adventure or nothing. `Helen Keller",
          style:{ // style of secondary text
             "text-align": "center",
             "color": "brown"
          }
       }],
       actions:[ // Any number of checkbox action can be displayed
          {
             type: "checkbox",
             id: "LittleStart",
             targetElId: "FMTI-MODAL-BTN-RIGHT", //Button Id enable/disable
             text: "Hey! Don't show me again",
             style:{}, // style of label and checkbox
             onCheck: (btnId)=>{ // btnId latest change 
                fmtiModalWindow.enableButton(btnId);
             },
             onUnCheck: (btnId)=>{ //  btnId latest change
                fmtiModalWindow.disableButton(btnId);
             }
          }
       ]
    },
    footerInfo:{
       btnLeft:{
          show: true,
          enable: true,
          text: "Cancel",
          style:{}, // style of left button
          onclick:"DESTROY" // it will destroy modal window from dom
        
       },
       btnRight:{
          show: true,
          text: "Delete",
          enable: false,
          onclick: ()=>{} // function reference
          style:{} // right button style
       }
    }
 });
```
  [ ] Step 4: Subscribe to Modal Window promise 
```js
  // `{success: true, job: "Done 🚶🏿‍♂️", controllerId: "apModal"}`
    modalwindow.then((data)=>{
            if(data.success){
               fmtiModalWindow.openModal(data.controllerId);
            }
            }).catch((err)=>{
                  console.log("err",err);
            });
```
  [ ] Button Events || enableButton() & disableButton() Methods
- Right(FMTI-MODAL-BTN-RIGHT) & Left Buttons(FMTI-MODAL-BTN-LEFT): Whenever you want to enable, disable buttons with event, 
    -   eg: lets say checkbox event, add key in checkbox object->  targetElId: "FMTI-MODAL-BTN-RIGHT", as given above
    -   onCheck event if you paas function reference the default arg will be this id. 
    -     fmtiModalWindow.enableButton(btnId); Enables the button 
    -     fmtiModalWindow.disableButton(btnId)
```js
        Lets say we have 2 functions and inside calling modal window enable disable methods
         const onCheckboxHandler = (elId)=>{
             modalwindow.enableButton(elId); //id of button is passed
        }
        const onUncheckHandler = (elId)=>{
           modalwindow.disableButton(elId); //id of button is passed
        }
        eg: Lets say our action array in config
          actions:[ 
          {
             type: "checkbox",
             id: "LittleStart",
             targetElId: "FMTI-MODAL-BTN-RIGHT", //Button Id
             text: "Hey! Don't show me again",
             style:{}, // style of label and checkbox
             onCheck: onCheckboxHandler // Calls reference function
             onUnCheck: onUncheckHandler // Calls reference function
          }
       ]
```

Thanks
