import './style.css'
import InterviewData from '../../source/interview-data'

export const Interview = () => {
    
    console.log(InterviewData)
    
    return (
        <>
    
    <div className="container-interview-simulator">
        <h1>Try out our job interview simulator</h1>
        <p>And prep yourself for the toughest questions</p>
        <a href="#interview"><button>Start interview</button></a>
    <div className="interview-characters-container">
        <img src="/man.svg" alt="man" />
        <img src="/woman.svg" alt="woman" />
    </div>
    
    <div className="interview" id="interview">
    {InterviewData.map((bok)=>{
            if (bok.question_man===bok.question_woman) {
                return (<div className="question-container" key={bok.id}>
                <div className="hr-question">
                    <img src="/interviewer.png" />
                    <p>{bok.question_man}</p>
                </div>
                <div className="interview-reply">
                <p> {bok.answer_man}</p>
                </div>
            </div>)
            }
            else {
                return (
                    <>
                    <div className="columns-2">
                    <div className="hr-question">
                        <img src="/interviewer.png" />
                        <p>{bok.question_man}</p>
                    </div>
                    <div className="hr-question">
                        <img src="/interviewer.png" />
                        <p>{bok.question_woman}</p>
                    </div>
                  </div>
                    
                  <div className="interview-replies">
                        <div className="man-reply">
                        <p>{bok.answer_man}</p>
                        </div>
                        <div className="woman-reply">
                        <p>{bok.answer_man}</p>
                        </div>
                   </div>
                   </>
                  
                )
            }

            })}
           



    </div>
    
    </div>
    </>)
}