
import React, {useEffect, useRef, useState} from 'react';
import "./assets/css/style.css"
import Images from './components/Images';

// class App extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {title: "Hello React Js", isShowing: false}
//     // }

//      handleClick = () => {
//         this.setState({isShowing: !this.state.isShowing})
//     }
//     render() {
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/4">
//                     <div className="text-center">
//                         <div className="my-4">{this.state.title}</div>
//                         <button className="p-1 bg-blue-700 text-white my-8" 
//                             onClick={this.handleClick}
//                         >
//                             Toggle Image
//                         </button>
//                     </div>
//                     {this.state.isShowing ? <Images/> : null}
//                 </div>

//             </section>
//         );
//     }
// }
function App() {
    const [title, setTitle] = useState("Hello React");
    // const [isShowing, setIsShowing] = useState(false);
    // reference components 
    // const montRef  = useRef(false);

    // // components did mount only
    // useEffect(() => {
    //     console.log("mounted components");
    // }, [])

    // useEffect(() => {
    //     if (montRef.current) {
    //         console.log("updating");
    //     } else {
    //         montRef.current = true;
    //     }
    // }, [isShowing])

    // function handleClick() {
    //     setIsShowing(!isShowing);
    // }
    return (
        <section className="flex justify-center">
            <div className="max-w-4xl">
                <div className="text-center">
                    <div className="my-4">{title}</div>
                    <Images/>
                </div>
            </div>

        </section>
    );
}

export default App;