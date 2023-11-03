import React, { useState } from 'react';
import './JobOpening.css';
import { FaCaretDown, FaCaretRight, FaCaretUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobOpening = () => {
    const [showDepartments, setShowDepartments] = useState({});


    const toggleDepartment = (department) => {
        setShowDepartments({
            ...showDepartments,
            [department]: !showDepartments[department],
        });
    };

    const departments = [
        {
            name: 'Software Department',
            jobs: [
                {
                    title: 'Software Job 1',
                    location: 'Location 1',
                    description: 'Description 1',
                    span: 'Span 1',
                    applyLink: '/apply1',
                    applyLinkText: 'Apply Now',
                },
                {
                    title: 'Software Job 2',
                    location: 'Location 2',
                    description: 'Description 2',
                    span: 'Span 2',
                    applyLink: '/apply2',
                    applyLinkText: 'Apply Now',
                },
            ],
        },
        {
            name: 'Hardware Department',
            jobs: [
                {
                    title: 'Hardware Job 1',
                    location: 'Location 1',
                    description: 'Description 1',
                    span: 'Span 1',
                    applyLink: '/apply1',
                    applyLinkText: 'Apply Now',
                },
                {
                    title: 'Hardware Job 2',
                    location: 'Location 2',
                    description: 'Description 2',
                    span: 'Span 2',
                    applyLink: '/apply2',
                    applyLinkText: 'Apply Now',
                },
            ],
        },
        {
            name: 'Machine Learning Department',
            jobs: [
                {
                    title: 'Hardware Job 1',
                    location: 'Location 1',
                    description: 'Description 1',
                    span: 'Span 1',
                    applyLink: '/apply1',
                    applyLinkText: 'Apply Now',
                },
                {
                    title: 'Hardware Job 2',
                    location: 'Location 2',
                    description: 'Description 2',
                    span: 'Span 2',
                    applyLink: '/apply2',
                    applyLinkText: 'Apply Now',
                },
            ],
        },
        {
            name: 'Embedded Department',
            jobs: [
                {
                    title: 'Hardware Job 1',
                    location: 'Location 1',
                    description: 'Description 1',
                    span: 'Span 1',
                    applyLink: '/apply1',
                    applyLinkText: 'Apply Now',
                },
                {
                    title: 'Hardware Job 2',
                    location: 'Location 2',
                    description: 'Description 2',
                    span: 'Span 2',
                    applyLink: '/apply2',
                    applyLinkText: 'Apply Now',
                },
            ],
        },
        {
            name: 'AI(YOLOv5 & Image Processing) Department',
            jobs: [
                {
                    title: 'Hardware Job 1',
                    location: 'Location 1',
                    description: 'Description 1',
                    span: 'Span 1',
                    applyLink: '/apply1',
                    applyLinkText: 'Apply Now',
                },
                {
                    title: 'Hardware Job 2',
                    location: 'Location 2',
                    description: 'Description 2',
                    span: 'Span 2',
                    applyLink: '/apply2',
                    applyLinkText: 'Apply Now',
                },
            ],
        },
        {
            name: 'Marketing Department',
            jobs: [
                {
                    title: 'Hardware Job 1',
                    location: 'Location 1',
                    description: 'Description 1',
                    span: 'Span 1',
                    applyLink: '/apply1',
                    applyLinkText: 'Apply Now',
                },
                {
                    title: 'Hardware Job 2',
                    location: 'Location 2',
                    description: 'Description 2',
                    span: 'Span 2',
                    applyLink: '/apply2',
                    applyLinkText: 'Apply Now',
                },
            ],
        },
    ];

    return (
        <div className='home-container-content-job'>
            <div className="home-container-content-job-top">
                <h2>Join TechFarming: Cultivating Innovation in Agriculture</h2>
                <p>
                    TechFarming is on a mission to revolutionize agriculture through cutting-edge technology and sustainable practices. If you're ready to be a part of a company that is committed to strengthening the agriculture economy and making a positive impact on the world, TechFarming is the place for you. Explore our job openings and grow your career with us.
                </p>
            </div>
            <div className="home-container-content-job-bottom">
                {departments.map((department, index) => (
                    <div key={index} className='department'>
                        <div className="home-container-content-job-bottom-up">
                            <h3>{department.name}</h3>
                            <button onClick={() => toggleDepartment(department.name)}>
                                {showDepartments[department.name] ? <FaCaretUp /> : <FaCaretDown />}
                            </button>
                        </div>
                        {showDepartments[department.name] && (
                            <ul>
                                {department.jobs.map((job, jobIndex) => (
                                    <li key={jobIndex}>
                                        <div className="left">
                                            <h4>{job.title}</h4>
                                            <p>{job.location}</p>
                                            <p>{job.span}</p>
                                            <p>{job.description}</p>
                                        </div>
                                        <div className="right">
                                            <Link to={job.applyLink}>{job.applyLinkText}</Link>
                                        </div>
                                    </li>
                                ))}
                                    <Link to='/#' className='explore-more-job'>Explore more jobs<FaCaretRight /></Link>
                            </ul>
                        )}
                        <hr />
                    </div>
                ))}
                <Link to='/#' className='opportunities-page'>Take Me to Opportunities Page</Link>
            </div>
        </div>
    );
}

export default JobOpening;
