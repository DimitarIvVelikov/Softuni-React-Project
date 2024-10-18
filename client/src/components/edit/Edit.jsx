import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataService } from "../../apiAndServices/dataService";

export default function Edit() {
  const { id: programId } = useParams();

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    imageUrl: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { name, description, duration, difficulty, imageUrl } =
        await dataService.getTrainingProgram(programId);

      setFormValues({
        name,
        description,
        duration,
        difficulty,
        imageUrl,
      });
    })();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const { name, description, duration, difficulty, imageUrl } = formValues;
    if (!name || !description || !duration || !difficulty || !imageUrl) {
      alert("All fields are required!");
      return;
    }
    const regExp = new RegExp(/^https?:\/\//);
    if (!regExp.test(imageUrl)) {
      alert(
        "Invalid image URL! Image Url should start with Http:// or Https://"
      );
      return;
    }

    try {
      await dataService.editTrainingProgram(programId, formValues);

      navigate(`/program/${programId}`);
    } catch (error) {
      console.log("Error Edit");
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
      <h1 className="home-title">Edit Program</h1>

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
            placeholder="http:// | https://"
            value={formValues.imageUrl}
            onChange={onChangeHandler}
          />
        </div>

        <div className="submit-button">
          <button type="submit">Edit</button>
        </div>
      </form>
    </>
  );
}
