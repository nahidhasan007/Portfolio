import {React,useState} from 'react'
import './works.scss'

function Works() {
    const [currentslide, Setcurrentslide] = useState(0);
    const handleClick = (way)=>{
        way === "left" ? Setcurrentslide(
            currentslide > 0 ? currentslide-1:2
        ):
        Setcurrentslide(currentslide < 3 ? currentslide+1:0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" 
            style={{transform:`translateX(-$(currentslide*100)vw)`}}>
            <div className="container">
                <div className="item">
                <div className="left">
                    <div className="leftcontainer">
                        <div className="imgcontainer">
                           <img src="images/mobile.png" alt="" /> 
                        </div>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quo nihil neque iste quos explicabo illum earum odit
                        </p>
                        <span>Project 1</span>
                    </div>
                </div>
                <div className="right">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                </div>
                </div>
            </div>
            <div className="container">
                <div className="item">
                <div className="left">
                    <div className="leftcontainer">
                        <div className="imgcontainer">
                           <img src="images/mobile.png" alt="" /> 
                        </div>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quo nihil neque iste quos explicabo illum earum odit
                        </p>
                        <span>Project 2</span>
                    </div>
                </div>
                <div className="right">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                </div>
                </div>
            </div>
            <div className="container">
                <div className="item">
                <div className="left">
                    <div className="leftcontainer">
                        <div className="imgcontainer">
                           <img src="images/mobile.png" alt="" /> 
                        </div>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quo nihil neque iste quos explicabo illum earum odit
                        </p>
                        <span>Project 3</span>
                    </div>
                </div>
                <div className="right">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                </div>
                </div>
            </div>
            </div>
            <img src="images/arow.png" className="arrow-left" alt="" onClick={()=>handleClick("left")}/>
            <img src="images/arow.png" className="arrow-right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
