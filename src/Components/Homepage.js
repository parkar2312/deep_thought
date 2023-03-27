import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../Style/homepage.css";
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

function Homepage() {
  const [data,setData]=useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(true);

   const fetchData = () => {
    return fetch( "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json")
          .then((response) => response.json())
          .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div >
       {data.tasks
           ? <div className="homepage">
                <div className="homepage_left">
                   <Sidebar sidebarWidth={isOpen ? "392px" : "132px"} >
                     <div onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                           <div>
                              <div className="sidebar_header">Journey Board</div>
                              <div className="sidebar_content">
                                 <ul>
                                    <li><h3>{data?.tasks[0]?.task_title}</h3></li>
                                 </ul>
                                 <ul>
                                      {
                                        data.tasks[0]?.assets.map((ele)=>(
                                          <li><h5>{ele.asset_title}</h5></li>
                                        ))
                                      }
                                 </ul>
                              </div>
                     </div>
                           ) : (
           <div>
             <div className="sidebar_header" style={{height:'1rem'}}></div>
            <div className="sidebar_content">
              <div className="sidebar_square"><h1>1</h1></div>
            </div>
           </div>
          )}
                     </div>
                   </Sidebar>
                </div>
                <div className="homepage_right">
                  <div className="homepage_right_main">
                    <div className="homepage_right_header">{data.title}</div>
                    <div><button className="homepage_right_button">Submit Task</button></div>
                  </div>
                  <div className="homepage_right_main_2">
                     <h3>{data?.tasks[0]?.task_title}</h3>
                     <h5>{data?.tasks[0]?.task_description}</h5>
                  </div>
                  <div className="homepage_right_main_3">
                   <div className="homepage_box_one">
                       {
                           data?.tasks[0]?.assets.map((ele)=>(
                              <div className="homepage_box">
                                 <div className="homepage_box_header">
                                    <div className="sidebar_header_2">
                                       <div>{ele.asset_title}</div>
                                       <div onClick={() => setIsOpenNew(!isOpenNew)}><InfoIcon/></div>
                                    </div>
                                 </div>
      
       {isOpenNew ? (<div className="homepage_box_main"><b>Description:</b>{ele.asset_description}</div>):""}
      <div className="homepage_box_content">
       <div><div className="video_responsive">
           <iframe
             width="460"
             height="350"
             src={ele.asset_content}
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             title="Embedded youtube"
           />
         </div></div>
         
      </div>
                              </div>
                            ))
                       }
                   </div>
                  </div>
                </div>
                <div className="homepage_noti"> 
                      <div><CloseIcon style={{ color: 'white' }}/></div>
                      <span>Notice Board</span>
                  </div>
                
             </div>
           : ''
          }
    </div>
  );
}

export default Homepage;
