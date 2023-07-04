import React,{useContext} from 'react'
import './About.css'
import Card from './Card'
import shape2 from './assets/shape-2.png' 

const cv=[
    {id:1,category:'education',title:'B.Tech',subtitle:'NSUT (Main Campus)',date:'2021-Present',description:'I am persuing by Bachelors in Information Technology where I explored with various dimensions which Computer Departments offers us to know about our feild and proceed further in career with that branch.Current CGPA:8.75'},
    {id:2,category:'education',title:'12th CBSE',subtitle:'Apeejay School Saket',date:'2020-2021',description:'I successfully completed my 12th by persuing PCM with the Percentage of 94%'},
    
    {id:3,category:'education',title:'10th CBSE',subtitle:'Apeejay School Saket',date:'2018-2019',description:'I successfully completed my 10th with the Percentage of :95.4%'}
    
]

const skill=[
    {id:1,name:'C++ With DSA',percentage:90},
    {id:2,name:'HTML/CSS',percentage:70},
    {id:3,name:'Javascript',percentage:65},
    {id:4,name:'React',percentage:30},
    {id:5,name:'Node Js/Express Js',percentage:70},
    {id:6,name:'Mongo DB/SQL',percentage:50},
    {id:7,name:'Python',percentage:25},
    {id:8,name:'C',percentage:80}
]
const About=()=>{
    
    return(
        <section className='resume section'id='resume'>
            <h2 className='section__title text-cs'>About Me</h2>
            <p className='section__subtitle'>
                My<span>Story</span>
            </p>
            <br />
            <div className='resume__container container'>
                <div className='resume__group'>
                    <h3 className='resume__heading'>Education</h3>
                    

                    <div className='resume__items'>
                        {cv.map((val,id)=>{
                            if(val.category==='education'){
                                return <Card key={id} title={val.title} subtitle={val.subtitle} date={val.date} description={val.description}/>
                            }
                        })}

                    </div>
                </div>
            </div>

            <br />
            <br />
            

            <h2 className='section__title text-cs'>Professional Skills</h2>
            <p className='section__subtitle'>
                My<span>Talent</span>

            </p>
            <br />
            <div className='skills__container container grid'>
                {skill.map(({name,percentage,desciption},index)=>{
                    return(
                        <div className='skills__item'>
                            <div className='skills__titles'>

                                <h3 className='skills__name'>{name}</h3>
                                <span className='skills__number'>
                                    {percentage}<span>%</span>
                                </span>

                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage'style={{width:`${percentage}%`}}>
                                    <span></span>
                                </span>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='section__deco deco__left'>
                <img src={shape2} alt=''className='shape' />
            </div>
           
            
        </section>
    )
};
export default About;