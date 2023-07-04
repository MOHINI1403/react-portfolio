import React from 'react'
import { useEffect ,useState} from 'react'
import './Home.css'
import './App.css'
import profileImg from './assets/ProfilePage.png';
import CodingNinjas from './assets/codingNinjas.png';
import GeeksForGeeks from './assets/geeksForGeeks.png';

import shape1 from './assets/shape-1.png';
import shape2 from './assets/shape-2.png';
import './profile.css'
import './project.css'
const profiles=[
    {id:1,img:CodingNinjas,category:'Coding Profile',title:'Code Studio',link:'https://www.codingninjas.com/studio/profile/4b38eed0-270d-4bb2-8039-b55ba8b9d585'},
    
    {id:2,img:GeeksForGeeks,category:'Coding',title:'GeeksForGeeks',link:'https://auth.geeksforgeeks.org/user/mohinichauhanug21/practice'}
    
]
import{
    Chart as ChartJS,
    
    ArcElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';
import {Doughnut, Pie} from "react-chartjs-2"
import {FaLink,FaLinkedin} from 'react-icons/fa';
ChartJS.register(
    
    ArcElement,
    Title,
    Tooltip,
    Legend
);
const options={
    indexAxis:'y',
    elements:{
        bar:{
            borderWidth:2,
        },
    },
    responsive:true,
    plugins:{
        legend:{
            position:'left',
        },
        title:{
            display:true,
            text:'Chart.js Horizontal Bar Chart',
        },
    },
};
const Details=[];

const Profile=()=>{

    const[data,setData]=useState({
        labels:['Easy','Medium','Hard'],
        labelStyle:[{
            fill: 'white',
            fontColor:'white',
            fontSize: '10px'
       }],
        datasets:[
            {
                label:'Dataset 1',
                
                
                backgroundColor:[
                    '#00B8A3',
                    '#FFC01E',
                    '#EF4743'
                ]

            },
            
        ]
        

    })
    useEffect(()=>{
        const fetchData=()=>{
            const url="https://leetcode-stats-api.herokuapp.com/MOHINI-CHAUHAN-1403";
            fetch(url,{
                method:'GET'
            }).then(data=>{
                console.log("API DATA",data);
                const res=data.json();
                return res;
            }).then((res)=>{
                console.log("Reccess",res);
                const data=[];
                
                
                    data.push(res.easySolved);
                    data.push(res.mediumSolved);
                    data.push(res.hardSolved);
                    Details.push(res.ranking);
                    Details.push(res.acceptanceRate);
                    Details.push(res.contributionPoints);
                    Details.push(res.easySolved);
                    Details.push(res.totalEasy);
                    Details.push(res.mediumSolved);
                    Details.push(res.totalMedium)
                    Details.push(res.hardSolved);
                    Details.push(res.totalHard);

                    
                
                    setData(
                        {
                            datasets:[{
                                data:data,
                                backgroundColor:[
                                    '#00B8A3',
                                    '#FFC01E',
                                    '#EF4743'
                                ]
                            },
                        ],
                        labels:[
                            'Easy',
                            'Medium',
                            'Hard'
                        ],
                        }
                    )



                

            })
            .catch(e=>{
                console.log("Error");
                console.log(e);
            })


        }
        fetchData();

    },[])
    return(
        <section className='profile section'id='profile'>
            <h2 className='section__title text-cs'>Profile</h2>
            <p className='section__subtitle'>
                My<span>Coding Profile</span>
            </p>
            <br />
            <br />
            <div className='profile__container container'>
                <div className='pie-chart'  /*style={{width:'40%',height:'40%'}}*/>
                    <Doughnut data={data}  /> 

                </div>
                <div className='profile__group'>
                    
                    <br />
                    
                    <div className='home__img__wrapper'>
                        <div className='portfolio__items card card-two'>

                            <h3 className='leetcode__name'>MOHINI-CHAUHAN-1403</h3>
                            
                            <div className='contact-form-group grid'>
                                <div className='contact-form-div profile__section-div'>
                                    <div className=' details ranking'>
                                        <h5>Ranking</h5>
                                        <p>{Details[0]}</p>
                                    </div>
                                    <div className=' details acceptanceRate'>
                                        <h5>Acceptance Rate</h5>
                                        <p>{`${Details[1]}%`}</p>
                                    </div>
                                    <div className=' details EasySolved'>
                                        <h5>Easy Question Solved</h5>
                                        <p>{`${Details[3]}/${Details[4]}`}</p>
                                    </div>
                                    <div className=' details MediumSolved'>
                                        <h5>Medium Question Solved</h5>
                                        <p>{`${Details[5]}/${Details[6]}`}</p>
                                    </div>
                                    <div className=' details HardSolved'>
                                        <h5>Hard Question Solved</h5>
                                        <p>{`${Details[7]}/${Details[8]}`}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                    
                    
                    
                

                            
                        </div>
                        
                        
                        
                    </div>
                    
                    

                    
                </div>
            </div>

            <br />
            <p className='section__subtitle'>
                Other<span>Coding Profiles</span>
            </p>
            <br />
            <div className='portfolio__container container grid'>

                {profiles.map(({img,category,title,link},index)=>{
                    return(
                        <div className='portfolio__items card card-two'>
                            
                            <div className='portfolio__img-wrapper'>
                                <img src={img}alt='project'className='portfolio__img' />
                            </div>
                            <br/>
                            <span className='portfolio__category text-cs'>{category}</span>
                            <h3 className='portfolio__title'>{title}</h3>
                            <div className='home__socials'>
                                <a href={link}className='home__social__link portfolio_link'><FaLink /></a>
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
export default Profile;