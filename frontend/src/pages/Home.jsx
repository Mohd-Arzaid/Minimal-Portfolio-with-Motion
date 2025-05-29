import Container from "@/components/manual/Container";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:p-10">
        <h1 className="font-inter text-2xl md:text-4xl font-bold tracking-tight text-primary">Mohd Arzaid</h1>
        <p className="max-w-lg font-inter text-secondary text-sm pt-4 "> 
          I'm a software engineer with a passion for building scalable and
          efficient systems, I'm currently working as a software engineer at
          Google.
        </p>
      </Container>
    </div>
  );
};

export default Home;
