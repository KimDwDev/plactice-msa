# ✅ 일일 체크리스트

- kafka docker 컨테이너화 실습

- nodejs로 kafka 사용 실습

# 📌 kafka docker 컨테이너화 실습

## 📖 참고 링크: https://www.youtube.com/watch?v=ik7wP6zZ-wU

- kafka의 경우 여러 broker를 보통 같이 사용함으로 Dockerfile보다는 docker compose를 추천한다.

- kafka의 환경변수를 조사 한 후 상황에 맞게 kafka를 빌드해야 한다.

- 보통 pulbisher용으로는 broker의 개수를 넉넉하게 잡아서 백업이나 시스템 안정성을 높여야 한다.

- docker compose exec -it <container이름> <명령어>를 이용해서 해당 container에 집적 shell로 접속할 수 있다.

- topic과 관련된 명령어는 /opt/kafka/bin/kafka-topics.sh 에 존재하며 controller인 bootstrap을 활용하여 접속할 수 있다.

- topic을 생성할 수 있고 partition등을 지정할 수 있다.

- sql과 마찬가지로 topic이나 partition등을 설계한 후 사용하는 것을 권장한다. (보안 등의 기능도 사용이 가능하다.)

# 📌 nodejs로 kafka 사용 실습

## 📖 참고 링크: https://www.youtube.com/watch?v=dCQvtfATe_M

- 현재 운영 중인 kafka 서버의 외부 ip와 port번호와 클라이언트id를 이용해서 kafka의 접속할 수 있다. 

- kafkajs를 이용해서 nodejs에서 사용이 가능하고 이를 이용해서 사용이 가능하다.

- publisher, consumer를 구독해서 이를 이용해서 사용이 가능하다. ( 추가적인 자료 조사 후 사용 )