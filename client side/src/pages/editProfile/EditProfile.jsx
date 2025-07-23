import { useRef, useState } from 'react';

const EditProfile = () => {
  const inputVal = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="editProfile">
      <h2>Edit Profile</h2>

      <div className="form-group">
        <label>First Name</label>
        <input type="text" placeholder="First Name" />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input type="text" placeholder="Describe yourself..." />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="03xx-xxxxxxx" />
      </div>

      <div className="form-group">
        <label>City</label>
        <input type="text" placeholder="Karachi, Lahore, etc." />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <select>
          <option value="" disabled>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <input
        type="file"
        style={{ display: 'none' }}
        ref={inputVal}
        onChange={handleImageChange}
          accept="image/*"
      />

      <div className="btns" style={{
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }}>
        <div className="uploadPicBtn">
        <button onClick={() => inputVal.current.click()}>Upload Picture</button>
      </div>

      <div className="saveBtn">
        <button>Save</button>
      </div>
      </div>

    </div>
  );
};

export default EditProfile;
