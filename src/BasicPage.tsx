import React from "react";
export interface basicPageProps {
    img?:string;
    title?:string;
    par1?:string;
    par2?:string;
}
const basicPage:React.FC<basicPageProps> = (props) => {
    if (!props) {
        return <section>"Insert props"</section>;
    }
    return <section>
            <div>
              <img src={props.img} style={props.img?{ width: "800px", height: "300px" }:{}} />
            </div>
            <div style={{
              margin: '20px 10px 10px 20px'
            }}>
              <h1>{props.title}</h1>
              <p>
                  {props.par1}
              </p>
              <p>
                  {props.par2}
              </p>
            </div>
          </section>;
}

export default basicPage;
