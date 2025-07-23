import { useRef, useState } from 'react';
import './editProfile.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditProfile = () => {
  const inputRef = useRef();
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    desc: '',
    mobileNumber: '',
    location: '',
    gender: '',
    profilePicture: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData(prev => ({
          ...prev,
          profilePicture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const { firstName, lastName, desc, mobileNumber, location, gender, profilePicture } = formData;

      const body = {};
      if (firstName) body.firstName = firstName;
      if (lastName) body.lastName = lastName;
      if (desc) body.desc = desc;
      if (mobileNumber) body.mobileNumber = mobileNumber;
      if (location) body.location = location;
      if (gender) body.gender = gender;
      if (profilePicture) body.profilePicture = profilePicture;

console.log(body, "===>> body")

      const res = await axios.put('http://localhost:3000/api/v1/auth/update', body, {
        withCredentials: true,
         headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
      });

      toast.success(res?.data?.successRes?.message || "Updated successfully");

      setFormData({
  firstName: '',
  lastName: '',
  desc: '',
  mobileNumber: '',
  location: '',
  gender: '',
  profilePicture: ''
});

    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="editProfile">
      <h2>Edit Profile</h2>

      <div className="form-group">
        <label>First Name</label>
        <input type="text" value={formData.firstName} name="firstName" placeholder="First Name" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input type="text" value={formData.lastName} name="lastName" placeholder="Last Name" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input type="text" name="desc" value={formData.desc} placeholder="Describe yourself..." onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" value={formData.mobileNumber} name="mobileNumber" placeholder="03xx-xxxxxxx" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>City</label>
        <input type="text" value={formData.location} name="location" placeholder="Karachi, Lahore, etc." onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="" disabled >Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <input
        type="file"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleImageChange}
        accept="image/*"
      />

      <div className="btns" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div className="uploadPicBtn">
          <button onClick={() => inputRef.current.click()}>Upload Picture</button>
        </div>
        <div className="saveBtn">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
