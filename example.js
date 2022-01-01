import fmtiModalWindow from 'fmti-modal-window';

//Method If Button clicked
const onDeletion = ()=>{
   setTimeout(()=>{
      alert("You clicked me!!");
   },3000);
}

const data = ()=>{
    document.getElementById("domRl").addEventListener("click",()=>{
      //Initialization Of Modal Window
     const modalwindow =  fmtiModalWindow.init({
    containerStyle:{},
    headerInfo:{
       showTitle: true,
       text: "The Purpose of our lives",
       style:{
           color: "grey" //Styles can be given like this
       }
      
    },
    bodyContentInfo:{
       text: "Everyone thinks of changing the world, but no one thinks of changing himself",
       style:{
           color: "black" //Styles can be given like this
       },
       secondary:[{ // Added in latest version 
          text: "Life is either a great adventure or nothing. `Helen Keller",
          style:{
             "text-align": "center",
             "color": "brown"
          }
        
       }],
       actions:[
          {
             type: "checkbox",
             id: "LittleStart",
             targetElId: "FMTI-MODAL-BTN-RIGHT", //Button Id enable/disable
             text: "Hey! Don't show me again",
             style:{},
             onCheck: (btnId)=>{
                fmtiModalWindow.enableButton(btnId);
             },
             onUnCheck: (btnId)=>{
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
          onclick:"DESTROY"
          style:{}
        
       },
       btnRight:{
          show: true,
          text: "Delete",
          enable: false,
          onclick:onDeletion
          style:{}
       }
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
