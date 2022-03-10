import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../contexts/context';
import PageHeading from '../../components/pageHeading';
import RadioButton from '../../components/radioButton';
import { addScheduleReport } from '../../reducers/reportReducer';
import { days, employeeNames, dayInfo } from '../../utils/formData';
import { FormStyle, SelectStyle, FormDivStyle, FormSectionStyle, RadioStyle, ErrorStyle } from '../pages.style';

const ScheduleForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = data => {
    if(editInfo.id) dispatch(addScheduleReport({id: editInfo.id, ...data}))
    else dispatch(addScheduleReport(data))

    setEditInfo({})
    alert('Thank You!');
    navigate("/scheduleTable");
  }

  const generateId = () => Math.round(Math.random()*10000000)

  useEffect(() => {
    if(editInfo.id) Object.entries(editInfo).forEach(([name, value]) => setValue(name, value))
  }, [setValue, editInfo])

  const renderError = (errors, d) => {
    if(d === 'Monday') return errors?.monday && errors.monday.message
    if(d === 'Tuesday') return errors?.tuesday && errors.tuesday.message
    if(d === 'Wednesday') return errors?.wednesday && errors.wednesday.message
    if(d === 'Thursday') return errors?.thursday && errors.thursday.message
    if(d === 'Friday') return errors?.friday && errors.friday.message
    if(d === 'Saturday') return errors?.saturday && errors.saturday.message
    if(d === 'Sunday') return errors?.sunday && errors.sunday.message
  }

  const reportFormOptions = {
    name: {required: "Name is required" },
    weekDate: { required: "Week date is required" },
    hours: { required: "Hours is required" }
  }

  return (
    <FormSectionStyle>
      <PageHeading text="Log Weekly Shift" />
      <FormDivStyle>
        <h2>Weekly Shift Report</h2>
        <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <SelectStyle>
            <label htmlFor="name">Employee Name</label>
            <select name="name" id="name" {...register('name', reportFormOptions.name)}>
              { employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>) }
            </select>
          </SelectStyle>
          <ErrorStyle>{errors?.name && errors.name.message}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="weekDate">What is the first date of the week?</label>
            <input type="date" name="weekDate" id="weekDate" {...register('weekDate', reportFormOptions.weekDate)} />
          </SelectStyle>
          <ErrorStyle>{errors?.weekDate && errors.weekDate.message}</ErrorStyle>
          {days.map((d, i) => {
            return (
              <div key={i}>
                <p>{d}</p>
                <RadioStyle>
                {dayInfo.map((day, index) =>
                <RadioButton
                  key={index}
                  name={d.toLowerCase()} title={day.title} id={generateId()} register={register} options={{required: `${d} is required`}} /> )}
                </RadioStyle>
                <ErrorStyle>{renderError(errors, d)}</ErrorStyle>
              </div>
            )
          })}
          <SelectStyle>
            <label htmlFor="hours">What is your weekly work hours ?</label>
            <input type="text" name="hours" id="hours" {...register('hours', reportFormOptions.hours)} />
          </SelectStyle>
          <ErrorStyle>{errors?.hours && errors.hours.message}</ErrorStyle>
          <button type="submit">Submit</button>
        </FormStyle>
      </FormDivStyle>
    </FormSectionStyle>
  )
}

export default ScheduleForm