const About = () => {
  return (
    <section className="text-center pb-8 pt-20 bg-gray-300 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center md:flex-row md:items-start md:justify-between">
        {/* Image */}
        <img
          src="https://media.tenor.com/39tSZP53eBgAAAAi/super-avoid-super-pepe-avoid.gif"
          alt="Thanasin"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0"
        />

        {/* Text Content */}
        <div className="pl-0 md:pl-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Thanasin Pinchai
          </h2>
          <p className="text-lg mb-4 max-w-2xl mx-auto md:mx-0">
            Enthusiastic Junior Software Developer with a solid foundation in
            SQL, HTML, CSS, JavaScript, and RESTful API, gained through the
            Generation Bootcamp. Holds a Bachelor's degree in Liberal Arts,
            majoring in English, with one year of experience in language
            translation. Adept at problem-solving, effective communication,
            teamwork, interpersonal relations, time management, and analytical
            thinking. Driven by a passion for growth and eager to leverage these
            skills in a software development role that values continuous
            improvement and innovation.
          </p>

          {/* CV Button */}
          <a
            href="https://www.canva.com/design/DAGWKblsz1I/CbZJAbRYYqngcZUj-Ko0Ow/view?utm_content=DAGWKblsz1I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe75316910"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-700 transition duration-300"
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // For security reasons
          >
            CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
