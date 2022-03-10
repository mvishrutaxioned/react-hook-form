import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../contexts/context';
import RadioButton from '../../components/radioButton';
import PageHeading from '../../components/pageHeading';
import { addTaskAssigned } from '../../reducers/taskReducer';
import { employeeNames, phaseInfo, statusInfo } from '../../utils/formData';
import { FormSectionStyle, FormDivStyle, FormStyle, RadioStyle, ErrorStyle, SelectStyle } from '../pages.style';

const TaskForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const value = useContext(MyContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setEditInfo, editInfo } = value;

  useEffect(() => {
    if(editInfo.id) Object.entries(editInfo).forEach(([name, value]) => setValue(name, value))
  }, [setValue, editInfo])
  
  const onSubmit = data => {
    if(editInfo.id) dispatch(addTaskAssigned({id: editInfo.id, ...data}))
    else dispatch(addTaskAssigned(data))

    setEditInfo({})
    alert('Thank You!');
    navigate("/taskList");
  }

  const taskFormOptions = {
    task: { required: "Task is required" },
    phase: { required: "Phase is required" },
    status: { required: "Status is required" },
    assignTo: { required: "Assigned to is required" },
    dueDate: { required: "Due date is required" }
  }

  const generateId = () => Math.round(Math.random()*10000000);

  return (
    <FormSectionStyle>
      <PageHeading text="Assign Task" />
      <FormDivStyle>
        <h2>Employee Task Assignment Form</h2>
        <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="task">Task</label>
            <input type="text" id="task" name="task" {...register('task', taskFormOptions.task)} />
          </div>
          <ErrorStyle>{errors?.task && errors.task.message}</ErrorStyle>
          <p>Phase</p>
          <RadioStyle>
            {phaseInfo.map((phase) => {
              return <RadioButton key={generateId()} name="phase" title={phase.title} id={phase.id} register={register} options={taskFormOptions.phase} />
            })}
          </RadioStyle>
          <ErrorStyle>{errors?.phase && errors.phase.message}</ErrorStyle>
          <p>Status</p>
          <RadioStyle>
            {statusInfo.map((status) => {
              return <RadioButton key={generateId()} name="status" title={status.title} id={status.id} register={register} options={taskFormOptions.status} />
            })}
          </RadioStyle>
          <ErrorStyle>{errors?.status && errors.status.message}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="assignTo">Assigned To</label>
            <select name="assignTo" id="assignTo" {...register('assignTo', taskFormOptions.assignTo)}>
              {employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>)}
            </select>
          </SelectStyle>
            <ErrorStyle>{errors?.assignTo && errors.assignTo.message}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" {...register('dueDate', taskFormOptions.dueDate)} />
          </SelectStyle>
            <ErrorStyle>{errors?.dueDate && errors.dueDate.message}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" {...register('notes')} placeholder="Optional"></textarea>
          </SelectStyle>
          <button type="submit">Submit</button>
        </FormStyle>
      </FormDivStyle>
    </FormSectionStyle>
  )
}

export default TaskForm;