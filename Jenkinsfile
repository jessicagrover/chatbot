pipeline {
    agent any

    environment {
        NODE_VERSION = 'v20.12.2'  // Specify the Node.js version
        DEPLOYMENT_SERVER = 'jessicagrover@localhost'  // Replace with your server's SSH details
        DEPLOYMENT_PATH = '/Users/jessicagrover/chatbot'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git url: 'https://github.com/jessicagrover/chatbot.git', branch: 'prod'
            }
        }

        stage('Install Node.js') {
            steps {
                // Install Node.js using nvm (Node Version Manager)
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                sh '. ~/.nvm/nvm.sh && nvm install ${NODE_VERSION}'
                sh '. ~/.nvm/nvm.sh && nvm use ${NODE_VERSION}'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh '. ~/.nvm/nvm.sh && npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                sh '. ~/.nvm/nvm.sh && npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests (optional, if you have tests)
                sh '. ~/.nvm/nvm.sh && npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the built app to the server
                script {
                    def buildPath = "${WORKSPACE}/build"
                    sh "scp -r ${buildPath}/* ${DEPLOYMENT_SERVER}:${DEPLOYMENT_PATH}/"
                }
            }
        }
    }

    post {
        always {
            // Clean up the workspace after the build
            cleanWs()
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
