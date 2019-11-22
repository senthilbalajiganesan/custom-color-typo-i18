pipeline {
   agent { dockerfile true }
    stages {
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 88:80 462907c4774c'
            }
        }
    }
}