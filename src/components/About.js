import React, {useState} from 'react'

export default function About(props) {
    // const [mystyle, setMyStyle] = useState ({
    //     color: "black",
    //     backgroundColor: "white"
    //  }) 
    //  const [btnText, setBtnText] = useState("Enable Dark Mode")
     
    //  const toggleStyle = ()=> {
    //   if(mystyle.color == "black") {
    //     setMyStyle ({
    //         color: "white",
    //         backgroundColor: "black",
    //         border: "solid 1px white"
    //     });
    //     setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle ({
    //             color: "black",
    //             backgroundColor: "white"
    //         });
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    
  return (
    <div className='container my-4 p-4' style={{
        color: props.mode==='dark'?'white':'black'  
      }}>
        <h2>About Us</h2>
                <div class="accordion" id="accordionExample" style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
            <div class="accordion-item" style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={{
              color: props.mode==='dark'?'white':'black'  
            }} >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={{
              color: props.mode==='dark'?'white':'black'  
            }}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            <div className="container my-3  ">
            {/* <button type='button' className='btn btn-secondary' //</div>onClick={toggleStyle}
            >{btnText}</button> */}
        </div>
    </div>
  )
}
