import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
    const { createTask, getTask, updateTask } = useTasks();
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params);

    // cargar datos
    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id); //obtenemos el objeto pasando el id
                setTask({
                    title: task.title,
                    description: task.description,
                });
            }
        };
        loadTask();
    }, []);

    return (
        <div>
            <h2>{params.id ? "Edit Task" : "New Task"}</h2>

            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateTask(params.id, values);
                        navigate("/");
                    } else {
                        await createTask(values);
                    }
                    // establecer nuevos valores del formulario
                    setTask({
                        title: "",
                        description: "",
                    });
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
