# Dockerfile for AWS Amplify Build

There are a couple of strong reasons for supplying one's own build image for AWS Amplify. First, predictability, continuing to use the "default" which could change seems like a recipe for a late night disaster. As Murphy would have it, a seemingly simple but necessary change at 6pm may build locally but all of a sudden not build as intended in the AWS Amplify system. Having a dedicated build container makes everything far less magical. Second, AWS Amplify does not support git-lfs. Which is super unfortunate as static images will exist in any Single Page Application, without git-lfs the repository which holds the SPA is likely to bloat and quickly become non-performant. The symptom of developing using git-lfs and NOT having git-lfs in the provisioned build environment is that all of the images will be missing; there will be files but they will not contain image data. Using the Network tab in the browser tools will show that the files are unexpectedly small (150 Bytes +-).

The Dockerfile in this directory has been tailor made for the 207South website using the contents of the AWS Amplify Dockerfile as a starting point.

### Docker Image
Containers may be created from the image stored in the Docker Hub repository (wparkermackenzie/aws-linux-2:patch-wpm4). This image was created using the Dockerfile associated with this README.

## Steps for Creating a Provisioned Build Environment

### Tools Needed
- [A Docker Hub Account](https://hub.docker.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### Steps to Reproduce
- To create a base either use the Dockerfile here or obtain an initial provisioning script from the AWS Amplify Console. When obtaining it from AWS Amplify, copy the supplied script from the Provision tab into local Dockerfile. There be dragons here... as of the 11/08/2021 of the script supplied by AWS it has obvious flaws (e.g. the pathing at the end is just obviously busted...), so read thouroughly, question everything, and keep only what is necessary. 
- Tailor the Dockerfile to taste. For the 207South website, the biggest need was node version 14 (and obviously git-lfs as mentioned above). There are some [Custom build image requirements specified by AWS](https://docs.aws.amazon.com/amplify/latest/userguide/custom-build-image.html).
- With Docker installed, go to the directory with the Dockerfile and execute the following:
```bash
docker build -t wparkermackenzie/aws-linux-2:patch-wpm4 . && \
docker run -it wparkermackenzie/aws-linux-2:patch-wpm3 "bash"
```
Replace wparkermackenzie/aws-linux-2 with your Docker Hub repository name and patch-wpm4 with the appropriate tag. The build command will make a Docker Image from the Dockerfile; the -t specifies the name and optional tag. If the build succeeds then the run command will run the image specified by the tag interactively, providing the first command to be run as bash. 

- Test it locally first... this is super important, otherwise you may waste lots of time transfering the provisioning image to the cloud and find it does not work.
  - From inside the Docker Container, clone the site's repository. From there follow the build specification as a guide from AWS Amplify's "Build Settings". In 207South's case this is simply:
    - `npm install`
    - `npm run build`
  - For the super paranoid one can [enable Container Networking](https://docs.docker.com/config/containers/container-networking/) and connect to the website running in the Container being served by the npm package "serve"...
- Assuming all went well, use Docker Desktop to publish the image to Docker Hub where it can later be used by AWS Amplify
- In AWS Amplify Console go to "Build settings" and specify to use one's own build container. [Instructions are Here](https://docs.aws.amazon.com/amplify/latest/userguide/custom-build-image.html)
- Now just simply build, cross fingers, cross toes, grab a cup of tea, and wait for the website to be deployed. For those that like watching paint dry, this process can be monitored in the AWS Console's build.

So that is it... bob's your uncle. 

# References:
- [AWS Amplify - Amazon Linux Docker Image](https://hub.docker.com/_/amazonlinux/?tab=description)
- [AWS Amplify - Amazon Linux Extra Libraries needed for git-lfs](https://docs.aws.amazon.com/AmazonECR/latest/userguide/amazon_linux_container_image.html)
- [AWS Amplify - Amazon Linux User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/amazon_linux_container_image.html)
- [AWS Amplify - Custom Build Images](https://docs.aws.amazon.com/amplify/latest/userguide/custom-build-image.html)
- [Docker - Container Networking](https://docs.docker.com/config/containers/container-networking/)
- [Docker - Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Git - Large File Storage](https://git-lfs.github.com/)
- [Docker - Hub](https://hub.docker.com/)
- [Node - Releases](https://nodejs.org/en/download/releases/)
- [Node - Node Version Manager](https://github.com/nvm-sh/nvm)
- [Knowledge Nugget - Stack Overflow git-lfs on Amazon Linux](https://stackoverflow.com/questions/71448559/git-large-file-storage-how-to-install-git-lfs-on-aws-ec2-linux-2-no-package)




# Me
W Parker Mackenzie

www.207South.com

Maker, destroyer, foe, and friend ;-)
