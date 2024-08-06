import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataService } from "../../apiAndServices/dataService";

export default function Create() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    imageUrl: "",
  });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const createdProgram = dataService.createTrainingProgram(formValues);
      console.log(createdProgram);

      navigate(`/program/${createdProgram._id}`);
    } catch (error) {
      console.log("Error Create");
    }
  };

  const onChangeHandler = (e) => {
    setFormValues((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className="home-title">Create Program</h1>

      <form onSubmit={submitHandler} className="create-form">
        <div className="name-input">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Example Name"
            value={formValues.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="description-input">
          <label htmlFor="description">
            Description <span className="required">*</span>
          </label>
          <input
            type="description"
            id="description"
            name="description"
            placeholder="Example description"
            value={formValues.description}
            onChange={onChangeHandler}
          />
        </div>
        <div className="duration-input">
          <label htmlFor="duration">
            Duration <span className="required">*</span>
          </label>
          <input
            type="duration"
            id="duration"
            name="duration"
            placeholder="duration"
            value={formValues.duration}
            onChange={onChangeHandler}
          />
        </div>
        <div className="difficulty-input">
          <label htmlFor="difficulty">
            Difficulty <span className="required">*</span>
          </label>
          <input
            type="difficulty"
            id="difficulty"
            name="difficulty"
            placeholder="difficulty"
            value={formValues.difficulty}
            onChange={onChangeHandler}
          />
        </div>
        <div className="imageUrl-input">
          <label htmlFor="imageUrl">
            Image Url <span className="required">*</span>
          </label>
          <input
            type="imageUrl"
            id="imageUrl"
            name="imageUrl"
            placeholder="imageUrl"
            value={formValues.imageUrl}
            onChange={onChangeHandler}
          />
        </div>

        <div className="submit-button">
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}
