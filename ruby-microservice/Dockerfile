FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /ruby-microservice

WORKDIR /ruby-microservice

COPY Gemfile /ruby-microservice/Gemfile
COPY Gemfile.lock /ruby-microservice/Gemfile.lock
RUN bundle install
COPY . /ruby-microservice

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3004

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]