import React from "react";
import "../styles/Work.css";

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {
  return (
    <section className="work">
        <h2>Work</h2>
     <div class="container">
     <div class="card">
       <div class="face face1">
         <div class="content"></div>
      <h2>Project 1</h2>
      </div>
      </div>
      <div class="face face2">
      <div class="content">
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
      <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
    </section>
  );
}

export default Work;
