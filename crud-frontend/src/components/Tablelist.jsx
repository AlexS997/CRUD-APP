
const Tablelist = ({handleOpen}) => {

    const clients = [
        {
            name: "John",
            email: "johnDoe@gmail.com",
            job: "Developer",
            rate: "100",
            isActive: true
        },
        {
            name: "Dave",
            email: "Dave@gmail.com",
            job: "Dev",
            rate: "80",
            isActive: false
        },
        {
            name: "Amber",
            email: "Amber@gmail.com",
            job: "Dev",
            rate: "95",
            isActive: true
        },
    ]

  return (
    <div className="overflow-x-auto mt-10">
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Rate</th>
                    <th>Active</th>
                </tr>
            </thead>

            <tbody className="hover">
                {clients.map((val, index) => (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.job}</td>
                        <td>{val.rate}</td>
                        <td>
                            <button className={`btn rounded-full w-20 ${val.isActive ? `btn-primary` : `btn-outline btn-primary`}`}
                            >
                                {val.isActive ? "Active" : "Inactive"}
                            </button>
                        </td>

                        <td>
                            <button className="btn btn-secondary" 
                            onClick={() => handleOpen('edit')}>
                                Update
                            </button>
                        </td>

                        <td>
                            <button className="btn btn-accent">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Tablelist