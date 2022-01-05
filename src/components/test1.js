import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { loadResults } from '../client/surveyDB';

export default class Example extends PureComponent {
  
  constructor(){
    super()
    this.state={
      data:{}
    }
  }


  componentDidMount = async () => {
    var results = await loadResults()
    var items = results.Items
    var americanYes = 0, japaneseYes= 0, indianYes = 0, thaiYes =0, chineseYes =0, mexicanYes =0, koreanYes =0
    var americanNo = 0, japaneseNo= 0, indianNo = 0, thaiNo =0, chineseNo =0, mexicanNo =0, koreanNo =0
    items.forEach(element => {
      
      switch (element.typeOfFood) {
        case 'American':
          if(element.recommend == "Yes"){
            americanYes++
          }else{americanNo++}
          break;
        case 'Japanese':
          if(element.recommend == "Yes"){
            japaneseYes++
          }else{japaneseNo++}
          break;
        case 'Indian':
          if(element.recommend == "Yes"){
            indianYes++
          }else{indianNo++}
          break;
        case 'Thai':
          if(element.recommend == "Yes"){
            thaiYes++
          }else{thaiNo++}
          break;
        case 'Chinese':
          if(element.recommend == "Yes"){
            chineseYes++
          }else{chineseNo++}
          break;
        case 'Mexican':
          if(element.recommend == "Yes"){
            mexicanYes++
          }else{mexicanNo++}
          break;
        case 'Korea':
          if(element.recommend == "Yes"){
            koreanYes++
          }else{koreanNo++}
          break;
        default:
          console.log("Nothing was found");
      }
    });
    var result = [];
    
    result.push({category:"American", yes:americanYes, no:americanNo })
    result.push({category:"Japanese", yes:japaneseYes, no:japaneseNo })
    result.push({category:"Indian", yes:indianYes, no:indianNo })
    result.push({category:"Thai", yes:thaiYes, no:thaiNo })
    result.push({category:"Chinese", yes:chineseYes, no:chineseNo })
    result.push({category:"Mexican", yes:mexicanYes, no:mexicanNo })
    result.push({category:"Korean", yes:koreanYes, no:koreanNo })

    this.setState({
      data : result
    })
  }





  render() {
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="yes" fill="#8884d8" /> 
          <Bar dataKey="no" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
