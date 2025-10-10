# ✅ 일일 체크리스트

- kafka docker 컨테이너화 실습

- nodejs로 kafka 사용 실습

# 📌 Kafka Docker 컨테이너화 실습

## 📖 참고 링크: https://www.youtube.com/watch?v=ik7wP6zZ-wU

- Kafka는 보통 여러 broker를 동시에 사용하므로 Dockerfile보다 docker compose 활용을 권장.

- Kafka 실행 시 환경 변수를 상황에 맞게 설정해야 함.

- Publisher 안정성을 위해 broker 수를 넉넉히 확보 → 백업 및 시스템 안정성 강화.

- docker compose exec -it <container이름> <명령어> 로 컨테이너 내부에 직접 접속 가능.

- Topic 관련 명령어는 /opt/kafka/bin/kafka-topics.sh 경로에 있으며, controller(bootstrap) 를 통해 접근.

- Topic 생성 및 Partition 지정 가능.

- SQL 설계처럼 사전에 Topic과 Partition 구조를 기획하고, 보안 옵션도 함께 고려하는 것이 바람직.

# 📌 nodejs로 kafka 사용 실습

## 📖 참고 링크: https://www.youtube.com/watch?v=dCQvtfATe_M

- 운영 중인 Kafka 서버의 외부 IP, Port, Client ID 를 기반으로 접속.

- Node.js에서는 KafkaJS 라이브러리를 사용하여 손쉽게 Kafka 연동 가능.

- Producer(Publisher), Consumer(Subscriber)를 통해 메시지를 발행·구독하는 방식으로 사용.

- 추가적인 자료 조사를 통해 활용 범위를 확장할 수 있음.