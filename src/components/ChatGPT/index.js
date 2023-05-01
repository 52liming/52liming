// npm install  openai

import React from 'react';
// import Layout from '@theme/Layout';
import { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: 'sk-',
// });
// const openai = new OpenAIApi(configuration);


export default function Chat() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    // setResult('...')
    setResult('本页面已经不在提供服务')

 /*    const response = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 2000,
      prompt: promptInput,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    if (response.status !== 200) {
      console.error('错误') 
    }

    console.log(response.data)
    // let resultText = response.data.choices[0].text
    // resultText = resultText.replaceAll('\n\n','<br/>')
    // console.log(resultText)

    setResult(response.data.choices[0].text); */
    // setPromptInput("");
  }
  
  return (
    <div className="card-demo">
      <div className="card">
        <div className='card__header' style={{textAlign: 'center'}} >
          <img src='/img/openai.png' style={{width: '125px'}} />
          <div>本页面已经不在提供服务</div>
        </div>

        <form onSubmit={onSubmit} className="card__body">
          <input style={{
            borderRadius: '4px',
            marginBottom: '16px',
            outlineColor:'#3578e5',
            border: '1px solid #3578e5',
            fontSize: '24px',
            lineHeight: '24px',
            width:'100%',
            padding: '12px 16px'
            }}
            type='text'
            name='prompt'
            value={promptInput}
            placeholder="请输入描述"
            disabled
            onChange={(e)=> setPromptInput(e.target.value)}
            >
          </input>
          <button style={{
            padding: '12px 0',
            fontSize: '24px',
          }} className="button disabled button--primary button--block">问一下</button>
        </form>

        <div className="card__footer">
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}