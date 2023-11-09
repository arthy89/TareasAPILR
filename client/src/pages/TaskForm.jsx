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
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        const response = await createTaskRequest(values);
                        console.log(response.data);
                        actions.resetForm();
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            placeholder="Write any title"
                            onChange={handleChange}
                            value={values.title}
                        />

                        <br />
                        <label>Description</label>
                        <br />
                        <textarea
                            name="description"
                            rows="3"
                            placeholder="Write any text"
                            onChange={handleChange}
                            value={values.description}
                        ></textarea>

                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Guardardando..." : "Guardar"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TaskForm;
