import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, DatePicker, Button ,Space } from 'antd';
import "antd/dist/antd.css";
import { Checkbox } from 'antd';



const plainOptions = [
    '08:00 - 09:30', 
    '09:30 - 11:00', 
    '11:00 - 12:30',
    '13:30 - 15:00', 
    '15:00 - 16:30', 
    '16:30 - 18:00',
];
// const options = [
//   { label: 'slot1', value: 'slot1' },
//   { label: 'Pear', value: 'Pear' },
//   { label: 'Orange', value: 'Orange' },
// ];
// const optionsWithDisabled = [
//   { label: 'Apple', value: 'Apple' },
//   { label: 'Pear', value: 'Pear' },
//   { label: 'Orange', value: 'Orange', disabled: false },
//];
class BlockCreateSchedule extends React.Component{
    render(){
        const { RangePicker } = DatePicker;
        const formItemLayout = {
          labelCol: {
            xs: {
              span: 24,
            },
            sm: {
              span: 8,
            },
          },
          wrapperCol: {
            xs: {
              span: 24,
            },
            sm: {
              span: 16,
            },
          },
        };
        const rangeConfig = {
          rules: [
            {
              type: 'array',
              required: true,
              message: 'Please select time!',
            },
          ],
        };

        const TimeRelatedForm = () => {
          const onFinish = (fieldsValue) => {
            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const timeValue = fieldsValue['time-picker'];
            const testValue = fieldsValue['test'];
           
            const values = {
              ...fieldsValue,
              // 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
              'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],

            };
            //Getting input values
            console.log('Received values of form: ', values);

           
            
        };

        function onChange(checkedValues) {
          console.log('checked = ', checkedValues);
        }
    return (
      <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
       
        <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
          <RangePicker />
        </Form.Item>
        
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >

          
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Checkbox.Group options={plainOptions} onChange={onChange} />
      </Form>


      

      
    );
  };
    return (

        <div className="rightblock_Schedule">
            <div className="blockwhite_Schedule">
                <h1 className="Topname_Schedule">Create Schedule</h1>
                <hr className="hr-Schedule"></hr>

                <div className="container-time">
                    <TimeRelatedForm />
                    
                   
                    
                </div>
            </div>
        </div>
        
    
    );
  }
}
export default BlockCreateSchedule;