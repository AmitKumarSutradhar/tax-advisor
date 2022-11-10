import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import NodeImg from '../../assets/nodejs.png';

const Blog = () => {
    return (
        <div>
            <Card className="w-3/4 mx-auto mt-20">
                <CardHeader color="blue" className="relative h-56">
                    <img
                        src="https://www.gcreddy.com/wp-content/uploads/2022/10/SQl-or-NoSQL.jpg"
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        Difference between SQL and NoSQL
                    </Typography>
                    <Typography>
                        The five critical differences between SQL vs NoSQL are:
                        <ul className='text-left'>
                            <li>1. SQL databases are relational, NoSQL databases are non-relational.</li>
                            <li>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>3.  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>5.  SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </ul>
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-3/4 mx-auto mt-20">
                <CardHeader color="blue" className="relative h-56">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioUdD1KevQTqEvtind22XkbR5AuSNzIoznQ&usqp=CAU"
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        What is JWT, and how does it work?
                    </Typography>
                    <Typography>
                        JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.

                        JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.

                        JWTs can be encrypted, but they are typically encoded & signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.
                    </Typography>
                    <Typography>
                        JWT work on -
                        When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                        By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                    </Typography>
                </CardBody>
            </Card>


            <Card className="w-3/4 mx-auto mt-20">
                <CardHeader color="blue" className="relative h-56">
                    <img
                        src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png"
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        What is the difference between javascript and NodeJS?
                    </Typography>
                    <Typography>
                        JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                    </Typography>
                    <Typography>
                        What is JavaScript?
                        JavaScript’s first version was launched in 1995 and it was developed by Brendan Eich of Netscape (then called LiveScript). As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.
                    </Typography>
                    <Typography>
                        What is Node.js?
                        Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.
                    </Typography>
                    <Typography>
                        Difference between JavaScript and Node.js
                        JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-3/4 mx-auto mt-20">
                <CardHeader color="blue" className="relative h-56">
                    <img
                        src={NodeImg}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        How does NodeJS handle multiple requests at the same time?
                    </Typography>
                    <Typography>
                        NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.
                        <br />
                        When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default Blog;