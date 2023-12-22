import React from 'react';
import '.././css/Card.css';

const CustomCard = (props: any) => {
    const { name, occupation, githubUser, githubURL, img} = props

    return (
      <>
      <div className='contact-card'>
        <img src={img} alt="" />
        <div className='container'>
            <h2>{name}</h2>
            <p className='title'>{occupation}</p>
            {githubUser && githubUser !== '' && (
              <a href={githubURL} style={{display: 'flex', flexDirection: 'row', margin: '1px', justifyContent: 'center', alignItems: 'center'}}>
                <img className='github-user-icon' src={require(".././img/github-mark.png")} alt="" />
                <p>{githubUser}</p>
              </a>
            )}
        </div>
      </div>
      </>
    );
  };

export default CustomCard;