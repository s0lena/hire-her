import './style.css'

export const Interview = () => {
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

      <div className="question-container">
        <div className="hr-question">
            <img src="/interviewer.png" />
            <p>Hello, my name is Eva, I`ll be your interviewer for today. Nice to meet you.</p>
        </div>
        <div className="interview-reply">
            <p>Hello, I am Anna / Peter. Nice to meet you.</p>
        </div>
      </div>

      <div className="columns-2">
        <div className="hr-question">
            <img src="/interviewer.png" />
            <p>Great. How would you handle a high workload if you had to stay late at work?</p>
        </div>
        <div className="hr-question">
            <img src="/interviewer.png" />
            <p>Great. How would you handle a high workload if you had to stay late at work? Do you plan to have children in the near future?</p>
        </div>
      </div>
        
      <div className="interview-replies">
            <div className="man-reply">
            <p>I'm prepared to handle challenging work tasks and believe I can effectively manage my time to meet work demands.</p>
            </div>
            <div className="woman-reply">
            <p>(taken aback) I don't have any such plans at the moment, but I believe it doesn't directly affect my ability to perform my job.</p>
            </div>
        </div>
      

    </div>
    
    </div>
    </>)
}