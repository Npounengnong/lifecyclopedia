import React from 'react'; 
import {getRandomUser} from "./Utility/api";

class CyclOPediaClassPage extends React.Component { //class based components inherently come with life cycle methods. 
    constructor(props) { //initialise our state by addinc a constructor, get props
        super(props); // we pass on props to React.Component using super(props)
        this.state={
            instructor: undefined,
            studentlist:[],
            studentCount:0,
            hideInstructor:false,
        }
    }

    /* the code below are the three critical life cycle methods people 
    use often when working with class based components */

    componentDidMount = async()=>{ // this is a life cycle method.                            !!!!THIS HAPPENS 1st!!!
        console.log("Component Did Mount") //adding logging just to see when they're fired 
        const response = await getRandomUser();
        this.setState((prevState) => {
            return { 
                intructor: {
                    name: response.data.first_name + " " + response.data.last_name,
                    email: response.data.email,
                    phone: response.data.phone_number,
                }
            };
        });
    }

    componentDidUpdate(){ //this is another life cycle method 
        console.log("Component Did Update")
    }

    componentWillUnmount(){ // and naothe rlife cycle method
        console.log("Component Will UnMount")
    }


    render(){ 
        console.log("Render Component") 
        return(<div> 
            {this.state.instructor && ( 
                <div className='p-3'> 
                    <span className='h4 text-success'>Instructor</span>  
                    <i className='bi bi-toggle-off btn btn-success btn-sm'></i> 
                    <br/> 
                    Name: {this.state.instructor.name}
                    <br/> 
                    Email: {this.state.instructor.email}
                    <br/> 
                    Phone: {this.state.instructor.phone}
                    <br/>
                </div>
            )}
        </div>)
    }
} 

export default CyclOPediaClassPage; 