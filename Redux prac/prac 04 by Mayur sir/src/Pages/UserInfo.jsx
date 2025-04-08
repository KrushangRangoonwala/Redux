import React, { useEffect, useState } from 'react'
import './userInfo.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, editUser } from '../slices/userSlice'
import { toggle,setAvailableId } from '../slices/toggleSlice'

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  street: "",
  suite: "",
  city: "",
  zipcode: "",
  companyName: "",
  catchPhrase: "",
  bs: ""
}

const UserInfo = () => {
  const params = useParams();
  const id = params.id;
  const allUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchNewData = useSelector((state) => state.toggle.fetchNewData);
  const availableId = useSelector((state) => state.toggle.availableId);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      name: yup.string().required('* Required'),
      username: yup.string().required('* Required'),
      email: yup.string().required('* Required').email('* Invalid email'),
      phone: yup.string().required('* Required'),
      website: yup.string().required('* Required').matches(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, '* Invalid Website'),
      street: yup.string().required('* Required'),
      suite: yup.string().required('* Required'),
      city: yup.string().required('* Required'),
      zipcode: yup.string().required('* Required'),
      companyName: yup.string().required('* Required'),
      catchPhrase: yup.string().required('* Required'),
      bs: yup.string().required('* Required')
    }),
    onSubmit: values => {
      console.log("values ", values)
      id ? handleEditUser(values) : handleAddUser(values);
      navigate('/');
    }
  })

  function handleAddUser(values) {
    const payload = {
      id: availableId,
      name: values.name,
      username: values.username,
      email: values.email,
      phone: values.phone,
      website: values.website,
      address: {
        street: values.street,
        suite: values.suite,
        city: values.city,
        zipcode: values.zipcode
      },
      company: {
        name: values.companyName,
        catchPhrase: values.catchPhrase,
        bs: values.bs
      }
    }
    dispatch(addUser(payload));
    dispatch(setAvailableId())
  }

  function handleEditUser(values) {
    const payload = {
      id: Number(id),
      name: values.name,
      username: values.username,
      email: values.email,
      phone: values.phone,
      website: values.website,
      address: {
        street: values.street,
        suite: values.suite,
        city: values.city,
        zipcode: values.zipcode
      },
      company: {
        name: values.companyName,
        catchPhrase: values.catchPhrase,
        bs: values.bs
      }
    }
    dispatch(editUser(payload));
  }

  useEffect(() => {
    !fetchNewData && dispatch(toggle(true));
    if (id) {
      const userArr = allUser.filter((val) => val.id == id)
      const user = userArr[0];
      formik.setValues({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address?.street,
        suite: user.address?.suite,
        city: user.address?.city,
        zipcode: user.address?.zipcode,
        companyName: user.company?.name,
        catchPhrase: user.company?.catchPhrase,
        bs: user.company?.bs
      });
    }
  }, [id])

  return (
    <>
      <form className="user-form" onSubmit={formik.handleSubmit}>
        <h2>User Form</h2>
        <label>
          <span className='label-text'>Name:</span>
          {formik.touched.name && formik.errors.name ? <span className='error'>{formik.errors.name}</span> : null}
          <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </label>
        <label>
          {formik.touched.username && formik.errors.username ? <span className='error'>{formik.errors.username}</span> : null}
          <span className='label-text'>Username:</span>
          <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </label>
        <label>
          {formik.touched.email && formik.errors.email ? <span className='error'>{formik.errors.email}</span> : null}
          <span className='label-text'>Email:</span>
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </label>
        <label>
          {formik.touched.phone && formik.errors.phone ? <span className='error'>{formik.errors.phone}</span> : null}
          <span className='label-text'>Phone:</span>
          <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </label>
        <label>
          {formik.touched.website && formik.errors.website ? <span className='error'>{formik.errors.website}</span> : null}
          <span className='label-text'>Website:</span>
          <input type="text" name="website" value={formik.values.website} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </label>

        <fieldset>
          <legend>Address</legend>
          <label>
            <span className='label-text'>Street:</span>
            {formik.touched.street && formik.errors.street ? <span className='error'>{formik.errors.street}</span> : null}
            <input type="text" name="street" value={formik.values.street} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
          <label>
            <span className='label-text'>Suite:</span>
            {formik.touched.suite && formik.errors.suite ? <span className='error'>{formik.errors.suite}</span> : null}
            <input type="text" name="suite" value={formik.values.suite} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
          <label>
            <span className='label-text'>City:</span>
            {formik.touched.city && formik.errors.city ? <span className='error'>{formik.errors.city}</span> : null}
            <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
          <label>
            <span className='label-text'>Zipcode:</span>
            {formik.touched.zipcode && formik.errors.zipcode ? <span className='error'>{formik.errors.zipcode}</span> : null}
            <input type="text" name="zipcode" value={formik.values.zipcode} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
        </fieldset>

        <fieldset>
          <legend>Company</legend>
          <label>
            <span className='label-text'>Name:</span>
            {formik.touched.companyName && formik.errors.companyName ? <span className='error'>{formik.errors.companyName}</span> : null}
            <input type="text" name="companyName" value={formik.values.companyName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
          <label>
            <span className='label-text'>Catch Phrase:</span>
            {formik.touched.catchPhrase && formik.errors.catchPhrase ? <span className='error'>{formik.errors.catchPhrase}</span> : null}
            <input type="text" name="catchPhrase" value={formik.values.catchPhrase} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
          <label>
            <span className='label-text'>BS:</span>
            {formik.touched.bs && formik.errors.bs ? <span className='error'>{formik.errors.bs}</span> : null}
            <input type="text" name="bs" value={formik.values.bs} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </label>
        </fieldset>
        <div className='submit-div'>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </>
  )
}

export default UserInfo
