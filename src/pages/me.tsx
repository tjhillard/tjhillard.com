import React from 'react';
import Layout from '../layouts/main';
import {
  TOP_SKILLS,
  SKILLS,
  PLACESS_OF_EMPLOYMENT,
  RECOMMENDATIONS,
} from '../../data/me';

export default class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <h2>top skills</h2>

        <section className="grid">
          {TOP_SKILLS.map(skill => (
            <div className="flex mb-md col-12 md:col-6">
              <img
                src={skill.image}
                alt={skill.name}
                style={{ height: '50px', width: '50px' }}
              />
              <div className="flex flex-col ml-md justify-center">
                <div>
                  <div className="font-size-lg">{skill.name}</div>
                  <div className="mt-sm">
                    {skill.yearsExperience} years professional experience
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="grid mt-xl">
          {SKILLS.map(skill => (
            <div className="col-6 md:col-4 flex mb-md items-center">
              <img
                src={skill.image}
                alt={skill.name}
                style={{ height: '30px', width: '30px' }}
              />
              <div className="ml-sm">{skill.name}</div>
            </div>
          ))}
        </section>

        <h2 className="mt-3xl">recommendations</h2>

        {RECOMMENDATIONS.map(recommendation => (
          <div>
            <div className="flex mb-md col-12 md:col-6">
              <img
                src={recommendation.image}
                alt={recommendation.name}
                style={{ height: '75px', width: '75px', borderRadius: '50%' }}
              />
              <div className="flex flex-col ml-md justify-center">
                <div>
                  <div className="font-size-lg font-weight-bold">
                    {recommendation.name}
                  </div>
                  <div className="mt-sm">{recommendation.title}</div>
                </div>
              </div>
            </div>

            {recommendation.message.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        ))}

        <h2 className="mt-3xl">experience</h2>

        <section className="grid">
          {PLACESS_OF_EMPLOYMENT.map(company => (
            <div className="col-12">
              <div className="flex mb-md">
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ height: '50px', width: '50px' }}
                />
                <div className="flex flex-col ml-md justify-center">
                  <div>
                    <div className="font-size-lg">{company.name}</div>
                    <div className="mt-sm">{company.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-sm">
                {company.positions.map(position => (
                  <div>
                    <div className="flex justify-between items-center">
                      <h3>{position.title}</h3>
                      <div className="font-size-sm">
                        {position.startDate} - {position.endDate}
                      </div>
                    </div>

                    <ul>
                      {position.bullets.map(bullet => (
                        <li className="my-sm leading-md font-family-body">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <h2 className="mt-xl">about me</h2>

        <p className="leading-md">
          I've been addicted to coding since my first HTML/Web Design class that
          I took when I was in the 6th grade. Motivated to learn more over the
          summer after that class ended, I went to the bookstore and picked up a
          HTML for Dummies book. To this day, I still remember reading about the
          &lt;blink> element and thinking it was the coolest thing ever (gone
          but not forgotten).
        </p>

        <p className="leading-md">
          With my new skills picked up from the book (and the super awesome
          bonus CD-ROM), I started my own company and website when I was only 12
          years old. With the money made from this business I was able to
          purchase the old, clunky, plastic,{' '}
          <a
            className="link"
            href="https://www.digitaltrends.com/computing/how-the-white-macbook-defined-a-generation/"
            target="_blank"
          >
            white macbook.
          </a>{' '}
          Whenever I wasn't playing Age of Empires on my new laptop, I was
          making sites and iOS apps for fun and building the foundation for my
          love of coding that I still have to do this day.
        </p>

        <h2>non-work stuff</h2>

        <h3>favorite music?</h3>
        <p>
          I love music. My favorite genres at the moment are house & drum and
          bass.
        </p>

        <h3>favorite hobbies?</h3>
        <p>
          Gaming, traveling, hiking, reading, chillin with my cat and fiancé
        </p>

        <h3>favorite sports team?</h3>
        <p>Liverpool Football Club ⚽️#YNWA</p>

        <h3>favorite movie?</h3>
        <p>Monty Python and the Holy Grail</p>

        <h3>favorite video game?</h3>
        <p>Tie between Halo 2 and Age of Empires 2</p>
      </Layout>
    );
  }
}
