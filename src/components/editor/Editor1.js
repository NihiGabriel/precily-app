import Split from "react-split";

const Editor1 = () => {
    return (
        <Split direction='vertical' style={{ height: 'calc(100vh - 1rem)' }}>
            <Split className='flex'>
                      
            <div className='bg-red-600'>
            <div className="wrapper  mt-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <form>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name </label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fullname" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Subject</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message"></textarea>
                                </div>
                                
                                <button type="submit" className="btn bg-red btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </Split>
            <div className='bg-red-400'></div>
        </Split>
    )
}

export default Editor1;