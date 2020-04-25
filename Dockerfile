# Inspiration and the source for using nginx to serve the assets: https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f
# I've added comments throughout to summarize what's going on in this file.

# Copy necessary files and build the application.
# Also, name this image `build-deps`, so that we can reference that in the production image creation.
# This seems to be referred to as a "stage" or "intermediate container", as seen in the production image build's COPY --from arg.
FROM node:current-slim AS build-deps

# Working dir in the Docker image.
WORKDIR /usr/src/app

# Copy the package and yarn lock files to the working directory.
COPY package.json yarn.lock ./

# Install dependencies in the working directory.
RUN yarn

# Copy other files needed to do a production build to the working directory.
COPY tsconfig.json ./
# Have to copy these directories individually because of the way the COPY command works.
# It copies the contents of the directory, not the directory itself.
COPY src ./src/
COPY public ./public/

# Do the production build of the app.
RUN yarn build


# The second `FROM` starts a new image.
# Everything from the `build-deps` image will ultimately be discarded (it's an "intermediate container").
# We will borrow artifacts from `build-deps` though.
# This allows us to get a production image without all the unneccessary artifacts (node_modules, maybe others).
FROM nginx:latest
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]