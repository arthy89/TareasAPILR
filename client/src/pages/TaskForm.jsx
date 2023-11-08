import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    try {
                        const response = await createTaskRequest(values);
                        console.log(response);
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                {({ handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            placeholder="Write any title"
                            onChange={handleChange}
                        />

                        <br />
                        <label>Description</label>
                        <br />
                        <textarea
                            name="description"
                            rows="3"
                            placeholder="Write any text"
                            onChange={handleChange}
                        ></textarea>

                        <br />
                        <button type="submit">Guardar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TaskForm;
