# TypeScript

Крупные приложения сложно писать на языках без статической типизации. Поэтому в мире веб-разработки появился и полюбился большинству разработчиков TypeScript. 

Пройдя этот блок, ты:
- узнаешь базовые принципы работы TS
- научишься писать на TS
- научишься использовать TS с React

Этот курс ориентирован в первую очередь на новичков в TypeScript. Не жди, что он раскроет все сокровенные тайны TS.

## Необходимые знания

Курс предполагает, что ты уже знаешь JavaScript ES2015+.

Для большей части курса знание React не нужно. Но курс описывает работу TS+React. Поэтому желательно знать React. Для этого можно пройти [курс](https://github.com/kontur-courses/react).

## Самостоятельное изучение

Вся информация из этого курса зафиксирована в этой [книге](https://race-timo.gitbook.io/typescript/).

## Презентация

[Ссылка на презентацию](https://kontur-courses.github.io/typescript/#/)


## Ссылки на задачи
В процессе курса в презентации будут ссылки на задачи. Чтобы не нужно было их искать по всей презентации, дублируем ссылки здесь:
- Простые типы
    - [Задание #1](https://www.typescriptlang.org/play?strictNullChecks=false&ts=4.1.3#code/PQKgsAUABDWMQgguEEAwgg2EEBwgghEEKwgVDsIIXhAlBxEC3zUHkQAGiiI0D4QQRhBBpECnx2cG4QOqOwCRA0GdBFAR1APCCB+EDQdygMRA0aSCGCQAxgHsAdgGcALlACGARgBcUTQFcAtgCMApgCcoAXjVa9hgExmb69QBs7A00XKDcdfQMAZjM9BwBLTQBzUPCPAwAWM0tbRwBtAF1UiA0IwwBWMwBBBwcDAE8AHjjEpIA+YtL0gDYzPJbkoucwkvdIgHY+3wCgzWoc+wchka7IgA4+hfyC6hq6poH25bTIowAGTetF6jytpZvbq8cdqDzH3KWCr+LIUEhYeDIdDYKAYNASJjUWiMFhsKCcbh8ARCETiKQyeSKCDKE5QGymGDDcZnADcuJs3kJUAAZgZ-No7GTRmUbDEqQAifx0gwAawM7KZqzxWSpeV0DgsdmotPpdgKgrGeN6ovO1HZ53Z8vJk1FADp9WKJXKtcyPDYNqK3vrdXlzl8XlaDeqzpr7ZBcaoABZ2VQ8nx+QLBUI2DJ5KIm37gaCwQB4IAxyIAmEEwOAkWEAAiBYMSkfBMHCqIwAWlUGSh9GYrHYTC4PH4gmEokk0jkCn+sATUEAsiD0MTwrgIHBoXtCHCAQRAoBI03QE+nkGIsTiIO7F8vQFBAIggffHk+nk+EC6FXp9PIA+gS7qF81AANRQcoKsqH33HzwXzy67QWGxxAAUZwAlPeHiPiebLTIGITDKoUR5GcJoHt6T4ZBe0FGEUN53h6CEnuUF4ZLqAAOFjaJ636ctyfLsgBQA)
    - [Задание #2](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgsAUABDWOgggGEECwgDBCIIVhAqsBwgh+EG4OwgCgYiDaByIFNlAYLwgCg4iDo3aDyIFEoNwgbAhgDRQAjfgGNKUACb9UCQFwg-eqkB8IIEYQQNIgkWFBqY1HRVEWAJEGzLFMqDMWAeEHxdS2AHSQQwSJGEB7AHYBnAC5Q3FAAvFAAZtwANj4ApgDc7t7+giHhUbEJEJ6+AaKhEdHxiTkSqQUZbhDFyQCOAIyp3JnZtQBMqeIA2gAMALrNSQE1AMypNe0A1FD1UFPiDpExXgDmfgAWAyU1ACypAgtLq2uzgp2tvQcr65u1AKx7IcGhwp11vT391UMAbKkvbx9Hs9Xu8+h8bkMAOxjX5PUI1e5wqD-d5vCHTAAcAC4oF4AK6RSJ-cFAA)
- Типы, как множества
    - [Задание #3](https://www.typescriptlang.org/play?strictNullChecks=false&ts=4.1.3#code/PQKgsAUABDWMQgguEEAwgg2EEBwgghEEKwgVA8IEhQQRA19BuEEBkQQXhBA+ECkI0AEQawZhA0cM1B+EEGkQKQFhBSgeRAoAQwCMAGlEAmKSIDMUwOIgGaoEYQXpRwbStaoAkQNGuoIoCark5ohgMRA0aAHSQQwSABsApgBdRYgFwA3JDiUAC8UGJBECHh0lHu3jKBwdJhEVEiqbEZWRFQANRQcZAJPgrJ0fJpAERuIm7VBVDVIo2F1QDWrRlV4V4ATgCuHvEQoJCw8Mjo2HgExGRUtPRMrOxcvALCAEaSUNuy+4pQKuq8BkYIaGYWVrb2UDrXqhTmUIBMIHSM1ErIgKIgEgmsHMqgY3BwlCQSjQkMAciAYQjCQhQAAGUAAov1+gB7fp+VHOVwQTw+XYVXZpADaYgADFIxABWAC6UQp4WpDKaAHZ6TSmZBQBisbj8S59tSmWkxAA2UYk-bScnSSl8mp1Opdaqs5Wq8IHFWSwr6vlRADG2IAdgBnHymgAWHlNHQA+gdnf59tjsZ4RBbKZK9cqxCyBSAhTi8VAxfrg5TpPyIKUjhVzdbbQ6na75O60tt5A5PBaAOZeO1my02qD2x0uvPOxVQG39ACWxdz8kp0ppfIN5bTVYztez8nxFsGAFtth5+lAAD6e70eX3tjlMiWs-MAB0GVrtAApKdUx5Pp9VeUyAJQbhzb3cH6rbL0+i1nqADYaXqKCzER0XAI43ju+6HseU79K+ABm9RWh4l6huGIpRv+eaAXeh6PouvqvjKn4lGM4DQLAiCoJgOD4EQJBIBQNBfKsbBQBwPD8EIUCcFgDBYLgWCUJQ3B-FAAAmYhQAAtIJtLKKoGhQFojzcLoUAXMYpjmJY1iCHYaCEpAqaVqawnhF2UimrktT1CImrGb0UBQW4MGjLpPhCfiaT6X2lYCQ2rnCYUbk6RWTkjjA4T6U0JnuU5AAsLkhQZoSGTSEWCQyMVQJS+nGcGSUCdKqWUg4BUmSGECOYJXJ5QVDjpXs+lMsVpUCQAHBVBXVcZ8b1QFgkAJwtVVGVpZVRV1dltJ9Tl7VSJV6XHLVxWhkCMDETMOCkLCxiAJwgDFcMxwhsRxXE8dQW0eJJZyPNQpCmJQaAoDgql3GgTDvFRiLacSiQeBU-n9h4BlQCMkAeKh+5mRqrRXj9lYeA2GHPmkHhxp1v1BdSdIRMyCNJR40VpU2rZFgGAPYylUAAIJYiIACeAA8lL422860kyAB8VKVYjDJ8iyQA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLSdoEt54rr4l0UZaxu9GnlUVC-KOwNt7yYgyGAxCok3X2FX80A/viewform?usp=sf_link)
- Объекты
    - [Задание #4](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgsAUABDWMQgguEEAwgg2EEBwgghEEKwgVDsIIXhAlBxEC3zUHkQAGiiI0D4QQRhBBpECnx2cG4QOqOwCRA0GdBFAR1APCCB+EDQdygMRA0aSCGCQAxgHsAdgGcALlACGARgBcUAN4BfKAF4oAbjVa9hgExnzUAGamomgK4AtgBGAKYATlDWdo4QGjr6BgDMHt6+RgAM1F7uULrh-qFQAD5QeuEAlpoA5lG2Dk4JhgAsqT5mASERdaWe7WX5VbXRDXHOiQCsbUYA-B1BYeHZrnN+C90jsZCgkLDwyOjYUBhoEkzUtIwsfAIIaCLiUjLy95z39ByAMiCiUIBMIFCAQRAMIABEDoRGQgFEQSi7WCiejApg4QhENCEQByIBgAeRAVAAAZQACi4XC6nCZlxShUEAANqF9MFfPU+mYjBMoABqKCsqKxBlM7xmABE1IMIoA1gZBRyoILAqKDBKpZYtjS6VBgrl+Tk2ikZSLxZK6srIBqtb4ANqZAC6yx1QrlBqVPMgkFp9N1ZrM+UKzogwSSnu8ou0RWNEFAhOJpLMynVSQAdD56t7Qiq3erWjA7J4DF6CqFqMEzF5g6Hec1zYLVIKrfUS9SQ+XKwBHGt10tNwWGzmC4JtuwplU7aCwRCoTA4E5nKCAFhAZFAAMIAQWoC4AQquF6uACIXejMVjsJhcHj8QTCUSSaRyBSUyC6ACeAAcisv6rFHy-F2v3-fn6+F1-CBP1fbcgMaFxVF8N87GFeVFVieJINyGCoCg6UoMQ8Y0N1dd6kyLCmlUTM8LsetGwg-RVCmRdAOzNIWQANl9JCqMYswFzoiwGJwljsNUAB2DiwLsc0rUQgT4yffxtAACwAChzIV9QVQ1LAASgkqSZIUzxK27GU+yte14LUzSXXDcARxgQAMEABCQ6C+XBAGEQbEJCwYEsDEUh8GctEoAAE2oOh3OBJB4T+XByBObEpyQKAHJEDg0SIJAxGoED1C8agxVCB8sqgRRrLyf9DGpCoDG0ABaFhtyXKAqqgbcADEoGcg4J2OU4WDnbE6oaprmr3K5DygThuBuc8HivZ4FHjO8xiaAKmRhGB+kYrJVu8XI4MdaFiq8XVzC2vYvEzcjQi2yx9ssCyQKa+qYj-L9tx-J7gNK7cuI-T6RNGe7twJICAda97KMC3x+rsALCJcALcle-CJgyWJ0wC3UvvqWVTMFWJ0fqJIMhR8GAszbc-sHEmJgAfV8QUfClUp6dcRmZUOqVYIZ2H9ACmjAfqXnae5wLGNpoUGZKNmWcl+mklZ+nmg5tnFeFgL2MGgXRaMIcrL2OyHKc1yuunAl6sagkwPuEKPPCugETxAAyfF7lxYpcWodrxyOKcevnUIjAG0Jmn2vZLgPNgxuPCazyEaanhvIrlGeopTf5XM1i6SJbo+r8CTe7iiwGSoaiiZPCS4zxVFWYJ1HUWkDE0Uuc5Tv6lKgc1OkWWts-B-2zGzdPMkLZScbDVioFCXIB5ZCZh5lB1VMFahVGLUsx+w0JdWzMN0yD-uLHTjaMjDIOmXTy0JitZUgA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLSc8imy1IR8rPN5z4pMdmlYNJnKks0NMdNnh3OnjFMqvVkf0Jw/viewform?usp=sf_link)
- Функции
    - [Задание #5](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgsAUABDWMQgguEEAwgg2EEBwgghEEKwgVCCIGwZhBBeECQ0GEQQARBBpECkBEQMohQMRA1BOECgEMBGAWg4FYANFEDiIBkB8IIEYQGkRzTA3CDio4wBIgaSeIRQE4wDwggfhA08wPIgLNJBDBIAMwCuAOwDGAFwCWAe3ucuACgCUUADeUAC+Ng4uHl4cAEz+QaHhTm6enADM8cFhEHbJUZwALJmJOREp0fzF2ZDcPlwADH4A3DW+-FAA1FAxzTVxDcLOAE62AKa9ELE+AEQANhzzANYc08LWCwDO4y2TGRMcGYEh+4dQ1lwAXFDTALYLHMvToROOnhvOUAD6HAVX9rY3ABGoyGUAAvIV-DtXvZ3l8BFd3kNXPYAObgziVAB0OIA2nN7o9hLdCSsALoTSCgSCwKCAPBBDGpsFAMGh9DQAEIAQWEHI5UDQUA5AGFhGIpDI5FRFMo1BotDoDEZTGhzBBLJBnABPAAOoyFXIx-1msx22r1Qv5EONps1uv1IqNthNO0gMLhgMuBox8TBAD5rvMlitoW8PoCYlduRiOOCAwTg08uhwdp66o1U-1+JSIO7w2ko1aoL6A7iuPwyaHYeHfpaY3HOKmMmX6vUKamijm81BAfwo8KfQF-VAGlWPQA2fv14cpt1hnsAdinEJ8HGEgKHAdjXUBY-DAA5l8W1z3hI5N5xOj2r45U5Vx-VhAvHyPW8Jy8IYl-hGk0gUc9S0CwIgqCYDguAYBQ4gEGgOD6FgFBYAQFBkIA7CAIIK9CMGYUAAAaOLhYoSNIUCyFAChKKo6iaNoeiGCYOE0rAmEMMwaCAHIgeEEaRWDyIAMiCocY5HSkogBMIFQqGiaQfF4NoSAYbogpkAQ4iACwgRBKPoSAUEguhYJBulqhqpR5Kkjj+H8ALAkMOy5JEZk+DiWJDKM7xXBw9hariFLuZ5QSQJA1S5vOjhev8QIghi5kvCFkZQLi4XWWSUXpjF1ZQI4BZQEiKLohC5nTDlaKrIGpLTGlcKOLWiWRflMw1UMJUNBVHyOH2PbuO4syjB5KXTICnXdR5JXrLMWwtRlk4dV1PVeHV0weVqSbXEVqIlcMYwAeAQEwAyaBMjgjgLPMgLdTwaBENgFC0FgrC4DQAAiXI8A9D1ERKUD6BQgpoLg+jiPxqHiFJRCqp9CFYHpRBEFQgCiIFAAAmvAIwUTEwGRFGytRCp0cqZgWFYEAos4ILrI4+pPf5EBBcTpMcOTUAPfygSBQFRP2CTQxkxTA4s9TbO01z9MUw9VNBd2SNXJT1rOrawXpQjcVM06LpzgrWUPQOMuq-LcIo1Lova3LkBIz47RdNmOyKz445XuOE2fIrlkRaCELW9MC7LR75V7l8CNZQNM29W7GQbaMaybOHUBhxHY1RzH0cjPHSeDCnZyRxNszO9ZGIo1i3Vos4AAWvu4gAHsIWrJW7BRYjq7gbK45S+yjnxeqtudFBmat6wUnxxQ1nd1BNrcB4Ns1Dw09RXvwrbNEAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLScVFtG0snYPZ60B9nP5AEKOjSo4n_dKAOsmVCeU1q0k4WmTZA/viewform?usp=sf_link)
- Задачки практики середины курса:
    - [Практическое задание #1](https://www.typescriptlang.org/play/index.html#code/PQKgsAUABDWLgghhEEGwgheEEHwgVBCIIDhBD8INwdhBtABEDUCYQQBhBNAZECmxU0FYQYwERBHBOEEEEQKAYQEMANgGMArgL4AXAPYAnADRYKgLhAFgcRBMaQIwggaRAoZbQXK6ABkMGjx0mcag7A3CDYokWFG5pAEiDZNSioB4QR0povvh2gPIggGIg2I7YDraMBFAo2ICiIHpQBBRk2JzYvmicOFBomFC4zIyALCAUKCjaqbgUxH6MmKRkAHTOsIBEIHi6AMoiALYAgkISAJZSAHYKADIAptMA5hIAFmOTMwoAWgsyUptT04pKSIxQeagYvowooTSdECDAkJASAJ4ADgtQg6PjY5QAC8UAAFO1IV8+DI+EMAM4ALigfGmHwAlCCAHwotEAbne31+ixW6yOMxB4Mh7WhsIRyNRGOxuI+BIgnx+UD2B3JJ1BEKhMLhSJZmOBOMZbI5xKky15lIFNKF9NFzMVtOFDLRYol+LeEAm0wk+wAZnwhL9+MIxJJZFAAN5dGBgoRSIZDVEAE2R8IkMkNy3RyP+vLZLhdbo9029UF9-pWQagJNWG0BMzDsAj7q9Pr9AcT3MOaemGedruz0dz8cDyLmstDkAAvvrQFBALQgGhKgQqWFIgGYQKi0FAXFDIdBQF6QV3TX1QMzWyyyZFWiy2mQK8tRmNx-Naj7Mx3QWDwgDuEwkQjW4M3Xsxh5cLjM8N+ACJ4cMX4inQ+XDIFhIRBkE4wT4PcFAAIz3HUUSgABqKBwNLB8n1fAQlhTT9vx-GA-wAoDwVA1VxRRdo0NJNYkMfPhnygF8AC99ikTCj2w2BcMA4DCMZaDpSkE0YOBQTaJ3FYXygAB+EiyJTKAAEIhIABigBk5MUyjYBQ2iBFlZjWN-f8OPBSCiJxECoOZABZSQ1lI2UQMxYAoCs9ZbOWMFwPRb9mwgbzWwAWgCidXggSBW0ARBB4iKTxNDQJQgqncwbSsME3w-dEwQARgUhQMoAVk8iB51XZKX2k9YX3Sl8AEcTwWGq6oqhKFzXFKGIOCrMoUgqiqS2RWsYjrqtq+rGsKmZZwEPk50SxcZBS7Tlg65ybIAUQKybMvyprir60qdPSgAmQ7coANgK8LIo8LxYvikKIFbQBCECirwfH8W6etm+bBD4ABrPhBo9cQ-tG7berm1Khg6v0RAWbqZpaiGOqyuHmpK99IcqjKQcK+GSrKtYka60HPtK9DyvS6HYeJhH8cG-6FBfcDsY+hG2qY9KspyomcdR3a2cJhmstGlmSv5zGFJfLmUZ28GxbBSnpbB-r2vS+1G0Vkm5YAbQAXQK6m8f2lKFmF3HdoWwahY1mmjYVg3zaN5GUqyiXrcNxaOa6+WZBht2HY9sEDq5g6ABZzpAKAAr8oKgA)
    - [Практическое задание #2](https://www.typescriptlang.org/play/#code/PQKgsAUABDWCgggGEELwghpECkwrCCEEQQXCCD4QQbhBAZEHykHYQBQZhA9AhED0CYQAjJVQURAoAXATwAcBTKAEMANgEtBAZwB0UQPgggARBAHCBRA-CB5APCB5AkiDKki9gCIseQIwg85Aag1FKqAGUOAVwAmfAHYcpkWFECEIKYwlGgwrGzQAFT5BAGMACz4AJyhlABFRBL5ojgB7JMUyZPUMQDkQHVYsQHkQULV6GTgCKpV5BkCcZUUsNWIyQGEQQE4QYO9YFUCMIpYUEPooLARNdXR8nplAHBA8QDYQJDwoPCaMQBYQDAaaInQGSeqUL2hYIZhImPi8oowaZMOka0AREEUcBDp5AAaQoVYE9Zr0ZinXCKAgIZIzAgMBDyU75KAYahQHDg4y1O5QQBIIIjkfIQjj5HioA84okALTwtTYgjFQDiID0oKJnNjcfCmOtFG9TIApEAwODeWHezG+v3+eGaCwps0BBKQCDI9GQijGCOaxGKUB6rMFRwq1wJaQyWVyhQwryln0UPz+AOBinUoJJmtRMxoPQ+dGmyiwSO9pyNJqYfRkvlDKKIBKwfoDDFU2y5vv90vhxkO8gFQpMovFMwdMpd8o0CPdzB1SaznwQ1x8sdJ4eNwSjac53IjnaqucCBZ2RbFErLTtlAI0bvGYzBEMw6gJyjwgDEQZj4PqGjumyAgYCQbj8KAAVQkiSgAF4oABvAlcgBcUAkHASojcAHMANwEtyCABbPhn1fd8v1-CAAF9ICPXgBAAYWyRwEgva87wfZxnzcRwAIAI0SCCfA4UQOGEYCXzfD8f0gaCIFgk8AHUSNiAAlQQOAEG97xuGAEnY8iAEYoAAHygAAmESoAAZkkgAWSSAFYINo+iBCYjhYgcFx3A4FjsjItDuJ8BJ9PIgxX20jwDBomCIGPNTmJpJ49IMriCRMsjnwMDjHkSayoNs+yoHU2IABk+AANz4YRDIJMiouELyACtHDcURcksUSDAArlnDIzKoHM9x0oSfzaNAKA6SqqAD0CuD7CcVwPEQ5DUJvFqUIEAAyYLmK0prdNMqAepCtiOOG3qNPChLVIayyODQ89Lx628oGiJDOokZ9VoAbSfKBsLwxIAF1n36nSOtQyCoBUuz6qcy8byWhI6pPS1MhyJInovBIIMgUBqrkCFWnhSq6VqiB1rcV8XwEs7Gp02KeJ7LyJAEgwVWR-8gNR9HMZ8dbWr4Lb0ORnwdoE07SZ8GnYH2gT8dpmniNIsyADF0lfDGCSZqA+I458FMZ3neNM1GEas4WRfi6KvJy5w8r4fzedonxIMx26oZhjg4epKJaS+6m6cwwqde5rHALMs2pZlxLCpStKMqlwnNu2nnYB2hSqaMkWYH2oX3dplnPMKjmADMNPN33RZD7z9aeZWmfVwOoAp72U58KQs7RqQXYvCQ06l3mPKt+O-JT1XYFozXsmhhbnF197rUNn2-ZNgwG6j2BsbMzupYsgaSdbmmdvM9GqbRouPfMsSDHTsmmf2meu99nvUdniuCWT5GfINoeU9Hs35+jqAs6kHWp9p-nyKky+brvw-Z+P6Ol44We758NfTffjPYFt1HipO1-rxfigtN7I2rrZCqVU6Q1WAEAA)
    - [Практическое задание #3](https://www.typescriptlang.org/play/index.html#code/PQKgsAUABFgEIIrCCAYQQ3CCA4QQ7CCGEQQnCCCEQeUgIiCaC8IIFwggYiCqByIFALYCGA1gKYDKALiwA4A0UZQHwguQYAEQRIHkQKIH4QQTNHxALCCBpEEWZAkiDxAPCCYogQRBBekRJI0oqQMwgo5VEBMIIPS3x6xPFyQYe5EszVNBVDQoADsAVwAbcIA6OCQ0LDwCWz0CEnhBQEYQQFEQQUVULWUCRWQpNIJcVGllGMAMEHQM+AtERKgGYIBPKMgPKABxBjp2DgYuAC4emABaegZuKGmtRD09VFtzK0FbZSyoTMApEHgyETWACkBxEBEoQFkQS9xEIQJp00A2EHgASgn5qG5whnaWABOAAUAPYAZy+qEUhz0128WngJDu61EgjIiDsUEWy1WAQ2Wx2+0Ox0+0zBAGMQQCWF98GQNKhsPozm5SVAOKEAcEviRBAjRFA6RpGnIcopEN1oFAavjBEyiUcvjc5EZUej+EIROIpNJRKhTIs3LtFLzzOh9N41H5UDt0CRECzTNhRjA2QAiIFuyEbMjugCiXumTkQFndABlA-o0ajbKhNO6APqRvT2DK5e1SMjeXDoyUwQBYIIhniomWKUWioCcPW63jJlHc3HodfAFAijKhcIAZECbdl1iHsMUASCBQdD91ArLSGCq7XCCwQWQQa+5ynqWGNy3YZA6K+1ijs9vR92wY4Tl9XyQTjsUSWdeHzWgi69IZcToTaIUwScZSqZQQCoIF4qD6EeGIppk6aSAI2bopWbpJrW0xrhW0gtto8AuI2pSgam6a+FBbj0t+MDEVAADa1b8HBboALrzAAfGRVGUZ61EANykgBQSHuIx5RmQMZxgQVYRghZ5QA0Ci3tGmyCfwU6uLgB44SakFZgRiBESRjGepREa0ZMDHkTpUBUbRABkUAUlSNIALyWZS1JQAA1FAACM7E-vMnFAdx-YYsGFiwQGolIWQUCYBkqwKXY4gLnJRgKQe0mxpomkkUZbqUQG+mGRRJl6R5PQyuII73B+ZxRZhGrzuK3y-P8wLglANktTM3BROELDBAA5hwAAW8yuTEgAoICU1wiAuMysJwPBQIogjIM89o9LYLYkJgXYhBE0RFVYuiTktcijtImDtptZC8tIQhMgASqEwS1LKBAGEYggmKgBB6nomCYZiQgkAYaAxN5PSyLs-1nB+ZhrjYaz-YDQFpLOgiABIgqBpmF0x2g6HYohiCgoBg772nYa2CD0JyBEBwirbOsjzRY9poG8MSAGgg8DIIg+DIJ2vL8BcmSwwIRbzVoUC8vYYv9IMnAjCwkwEBkyjIOLmzKEyVxkOg2jSCUArYisx6rrKTLoqIuDVJAIDAJKHDtNwNLS0McvNa0HSSgAZvd5IcAAliC3KMNNXDcCcADedV-ICoJgvwjB8PZ1n8ByXJQAAvi6Tuy1wbyZwMztcFAAA+W2RFAYeQGnkqQKAkzTPmuSlSdegwTD8yTNbkCUsEYIcJZwwAhwACysyuxllFJhPmUmZPJkBlPWXT2688z0vEYL6vi8b26BVdwHvf9wwg-Zywecy8Mhd2RHVnUi6AAMcezC6vdH8Psz8D8UeNWC9-J5ywT33Th5TqfcX6X0PsfC+LAPLdwPiwAAHg7H2LAAAmAAVf+EI7IACYAAsMD959wQUgrgKC2AOVslAAAbIVCAJwvbBB9v7bk4QQQglDrWCunlYF92CAgjgJ9XZByGDwE4YCWBvA8iRX2HtKx8PgQIqBzVWphEiJwz4JFYEgk6h1EE3UTgAAMMGp0pPdDgLoAAkYdxFRBTsENOBiPieU0fvbRLBdH6IMeQ6yljrFQKiDfFgDjJEaOIjIysNi7FQAAIStWISwZB6DMHFxLjYwJMS4mIISaQ7xjki6pP8fHUiNj44dS6r1AakxXK0ViXZas6jnFaRgP1AEIIADuIQWAdL9ACVpAIqxsBBIMfqvtuRtNaT1GsUimnp1CTAakdjpkwCrtw1xOjySdSPicEJqye5uI8SceRii5ZRFKQAKxBKMqsNYnEkXEa7I5J8lmWRYBwNBvtBgglCBwE4rD2H8FcnfIFTi05vG2R5Wu0x27WyAA)
- Generics
    - [Задание #6](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgUABFGBggiCIIfhBB8IIbhBAyIIdhBDCIIeRAIHMBTAO0ICcBLAYwFoFAGEEAEQewHhBBWEECEQRwaRAAaCJAkAcIIAkQIRzYQ4QwMwggXhB6HLDwiARECxzAXCCAxECGBOEAgBDAIw1DAFl6RogcRAOSQIwg3CHMlOUSAWIdJNETUgswig4ukJgIMBgAGYArsRUAC4UAPbERsYAFACUEADeEAC+MfFJqemGAEw5+UUlCclpRgDMOQVkhImxZOnEsQA2-QDcdXEN5UbmbRAdXT0QfYMjxWAmmcYADNkjawBE-YYHANaGu9sZmYlksYTnawUA2vuHhie7EADUELsAti9vAF0AFwQTZFO5ZB6bAEQzJPA7HU4wnaQq43ZFgVbVTb8TZ3arPRG7XFbHbVNGEfiE16nfGZR7Ut6fb5-InA0EbIr8aKHADOtyGWLh0P4DIRNPeX1+-yRILBhTp8JluwB-AeFORRmq6uuhFVECVbO2mP6nRaAH1jCC+j8AEbkCAAXha6y2-EMzXNlRBvKuFGI+CdLsZtPdnuaINtKRSpsM6WdHsyPP6-OyYfN5mtsTt5AeAKDiahlWaGLApsSk0tPr9AYLUzx7vMXsj0dj8cmcIArBsSTDG+aI7VosYAPxZnNkIp1pN826Y0DWKAwZDobB4IikSi0BjMdhcPgCYRiCQQDhCBDOABCAEEaJeACL8OyOZyuCDuTxIby+fyBYKhIRwkiMBEgATwAB0ICAbyDQUwMg6DL1gkCIKgy8AGFkP9RJyB5Kg0PvfIwBWKg0l9CBbStaDrwAHhte0yAAPiDTZBVI4hyNtb1qJo31KADZjnRDXY2LIitbUHG8aKhHsID4-18ABQSDRxFllQBQUwHYzjM0QmiADYNg2ZSCmHEFDM5QpRI48TOxBS9Lzo7MGJMiAzIgCzmW7SzrM4-T7McqMY0IOM81c9y8yKTTtPEgB2ez0JozsqWiCgADdCF2ZSHmS75UoylVfPEgAOBKnInKkABMKHwChEiyoMHliqqarqwqtLEiiAE4yvo3N9QeeSA34IbFOymTcVy4xOwG4SqVZCUAQ0zEYoozZ7PvcqGP4PqmKDApDDlWTbSOqKOpstaqIfXia3wHbnPIVzDu+TZiQo06rPOzjjG467RrzNVjGMCAAB9QUqKkgfeMHdh+t7-qWp6QUNRb+BOlTjEhyo3qeBbAXzT6wAXaBYEQVBMFwAgSHIag6CYVhOB4fhABYQNhVFQDg5G4SQMAUGw2DkIQ8CEAQZGYQX+cF9dqa3Ond0ZpBACYQKwScEURxEkaR5EUZRnHULRdAMKhDBoKhKqfewnBcNxuA8LwhB8PwAiCIQQjCCIojGMommNmoCmKL3GnSKhbT9mZOm6XoBmGUZSiDiAqCoMPZkjhZo+WepveDyqw5IzqqGB51fdUypO2NVaqEqINi9k3ZS7OIqE+aavDBu-j8EYzJYY2N6687BuvorKhzBbtuFPuidO+7t7S+NUAIAAUTIMgUjIEFIgT-PO1H0ap9e-hZ+i-P9Or0PhLnkBF+X1f1+ATeLqoWLT9dcv89Kl6e+f6fX4fnq5Nur+sUe7GkHgnMERck67FpI3AuVEoHvAgV3aBoCC7cV2LaBBCdIEYIvlfFea8IAbwrsYZuiDdgpESAACwdKNAeKDjAjyLpVGiB1qzty5N8U4ndWEvX7hw+BP9yIF23kwlhbkqK7X4cOLK9JxFym3oUFKxgB7EJPkw2Rz14Fo3MkZfgVBkaqWmgTKkVAVH52ME-dRPCtHvQ8rohOBjZJGP4cg+eS98G33vkI4wxVq7MJ4aNFxMjrHiiZIozhxBQIDzcdfAhRDzFdT8WI56gTwlQMicEowIJhIuIybg9xN9CF3wrpUTkVi3LcXMAopRDcgA)
    - [Задание #7](https://www.typescriptlang.org/play?#code/PQKgsAUABDWBgghBEEPwgg+EENwggZEEOwgh5ECgcwFMA7QgJwEsBjAWiUAYQQARB7AeEEFYQQIRBHBpEABooOgDhAkgrIMaBhEECcIBzZRAIiATAvCCAuEEBiIIMByIFABeFAA69IsKIHEQDikCMINyhK51tCigpAEiCDLKFVBUoWItDgaggB0UIBIIChYLCiAbCBKKPyoXGyWEpwIOMawgCwgKCII9BwYAsI2gEwgAmxocoqqQZAgwJAAZgCuxFQALhQA9sS6BgAUzRRkAM6d-GOEVH0AJgCUUADeWbPEE1AAthTEADIk+J0AFlAAvFAAsgCGJ8E7xMOjE8EANocnUzPzbx-HCwBuNZ9TZkQhjVqvTrnKAAbQAukDoFBmj0yFBBu9oRQYQAGAFQHEAHm2uwOxCOxwJFAA1DSlqtkTAwRCocF9K0xsdBrCRuNOrCKPCvus5oL4fCFlkAL5ZMGdVpkfosyGdSCyiCQdabACOAEYAFxQACCZDI1wAnkTYcRWlsAEbkKadSgU+EAPhhen0PL1-AATPwAMz8AAs-AArPwAGzCuEAIj18f48f9yag8aD8clSO10J1-qNpvNVth9p6PXe12I-HLlcI1Y9XqGsJdrUIcd511e034zW70xzWpB9bePXwg31-ALgKAA)
    - [Задание #8](https://www.typescriptlang.org/play?#code/PQKgsAUABDWBgghBEEPwgg+EENwggZEEOwgh5ECgcwFMA7QgJwEsBjAWiUAYQQARB7AeEEFYQQIRBHBpEABooOgDhAkgrIMaBhEECcIBzZRAIiATAvCCAuEEBiIIMByIATIB7AK4AHAEIBPXpFhRA4iAcUgRhBuUJXMdoUUFIAkQQfZQqoFRQWETQcDUEAOihAJBAULBYUQDYQJRR+VC42ewlOBBxLWEAWEBQRBHoODAFhJ0AmEAE2NDlFVQjIEGBIADN9YioAFwpdYh0DE1MACgBnAzIqQn4Aa0JTAGVCABtCft0yfgA3AEN1-UI1ze2yAEooAG8CqiHJvqgyQkn9deeAXihSAHcoABZA6GcaXADcBU6Oyg402zwoUB+AAZwVBEQAeKDTfSzQiRTbEfB9AAWaIoAGoKdc7tBYA9iE90X1CABbJHYmZzADaFAAupC6TAGUylqYOWKzls+jtxhQWaz+BQIQVhY9nodjoQOZqTlKLnKFUqVUL0Z1YQBCV7vT6REkHSbjMWXGmq2DWj59SKTQh9J3LfjcvkmqwAXzdHttRD9zsihn0kxJ411hBDUHDEAKrz6uOGkb6gozkBFzwAjgBGABcQJBGOI+lZACNyPx603yEGAHwc-B6Ixmcbc8v8ABM-AAzPwACx8-gADyR3YXAFIoGOoAuvkuoBSoOWTSWoKWR9XgYYMY3dLpNgdiPwbnPq09KESldW282yKGuzAfr3RgO3IAEQHKBQH8EBjZQeBUBAVQVAwUBpaIesRwHAsBxAbOsIAPrGou6LLiOSJfCi-DjHO+FbrCNwUPOoYusWjzXvi6y6Pg4wVvwx4QkAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLSdlTz1EhwzoH7CLF9Wo-Jwy2v1qlErMTlnrCbllYwf0yXJlVQ/viewform?usp=sf_link)
- Классы
    - [Задание #9](https://www.typescriptlang.org/play/#code/PQKgBAsAUGtouCCAYQQ-CCA4QQEiCsEIghWEDAYwBsBDAZ1LACEyBTaOMQDBBBBEGUD4QQbhBAZEEHYQQYRBAnCC4wgRhBOgLhBUYAESAsEDaAWEFE4eYNpjHjpYKXMVhmajeMSAeEFTaFHQPIgYZIAEQNoCYQHPclgsqND0SAxEFSo9HCA+CBszBx4ToDSIOwcgLwgOHGotuKKiGBOYKlxzJxSCpyAbCBxbKJRWFxggOIgqOGlACwADNAgwNDQoGDySiIqRqiaYK3QRGQUAIJgNAAeAC40AHYAJhTUpDRgAN5BsPgA9gukswBOAK74s3vHABTTAFxgC6cAtgBGNMcAlFs7DGCkpwADh9bgAaGTjaSfADcvwAvu0YHBAadXoQAJb4AjEQj4a4ATweTzeH0+RJe72OPyRfzAxxos1OxwWYFmAAt0aQAHTTMAAajA+NhNLACKgYpGJHIVCmc0WKyotGpDH2hxO50uN0J-xO6IWAHNvtsRQwAcCbgBGRrg-Ew+GIhgotGY7G4gnkklfZW0ukMpkswHEY7rACSC1m13ZnK5tv5guFDDFEqgqqOrvwpxImtIDzWNAA2gBdMAAXjA+YWNAA7mBxtcrZ9wZWa5RrtIrVDC8LU7N-i9S+nM8Rs1znsRAbdSwA+MDTLn4HF4ufTT6fLn0pbnGjXa7EcH4b4lmfEOMH7sHUh7Qg0LmEPb664A552qCdAC0H6GbSgHXA3QM-QiCY5hfiMi5Dtm+aNIWMbCs2irrPW1oyB2L7vp+rRAA)
     - [Задание #10](https://www.typescriptlang.org/play/#code/PQKgBAsAUGtouCCAYQQ-CCA4QQEiCsEIghWEDILhBBuEEUEEQEsADTFTC1WUoBUBPABwFNo4xAMEBOUB8IIUAyIIHYQQMIggThBcYQIwgQ-DQBEgLBABgFhA5OUWAGZ5+JdTCqNYcntSz8iQDwgqI+sKB5EDDJAAiADATCA53i2vSoooiAYiCoqFxwgPggAiSEeF6A0iCChIC8IDipqK74GohgXgQCqSRCNOpCgGwgqQJyiVjCYIDiIKhxNUoATAAMYACMAKxK0CDA0NCgYGqastq6+gL4YMPQAMYANgCGAM6blGAA3tAAvqNQAC5s7EwXYAC8YOsAdswA3CcAlg+n7ABOAGbry0uAEF9pFYAAPABcYAeAFcALYAIx+rygxyg0A+Xz+AMuACFQTA4KxvljoQAKZjQzanUkPADmAEpbgA+MAANwA9m8ACao9HQX6wh7LU5vTkPMDLb7sdZfclQmEI5HfAA0YHOHGhFBYHEZ0JBADIwASDkTYDLTrDvpKHuwAO4ai4Kxn8k7S2Xy-rqiiMgB0JKx5I6nSUjLG4AAtNHFiMMVA1lsdgB5U4ACx+hO4ywlNO+sNFnO+5NYsMRqzeyzAirhSJ+6tL5crYCpSrr32ZZu46IFUHGk3MsysNnssZWMrl7HJ3rAqYzHYjYGjkdjQA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLScGHVFdzcK747iP5ZToxucNWiFQSRcSrmwk6MC_nA9fQA7ZQQ/viewform?usp=sf_link)
 - Полезные штуки
    - [Задание #11](https://www.typescriptlang.org/play?#code/PQKgBI6CCAwggsIFi8IIDhBCsIALgFBi2QBCDKoNwgig7CCDCIIJwggQiDJiAiIKfIFwggYiCKByIGAI5iVSMA0YQOIglQHwggRhBA0iBh4NKQVFhRgCRBE40YzCNRgHhBA-CCICgeRBWiMGb2jAgiAEagJhBJlgrKRHM2O1tHwroomHkoMGIoAytAGRAMbDAAIgBGAAYwAEsAZzAAU04AVwBDABt0gBcAezBEgDowACYAVhT0rLzCsFKa2qrqpLTMnILisq6Y9yxADBArJ3CyKhoigE8ABwywAHM8gCcAEwBaSUEScWRAZhAoGbAAY1zUot2K9BBgdHRkgDsijPWAM1zz5YBBMAAbxGYE+JRKqDAAApcpCXtkALYAIw+AEowABeAB8YHhyI+AG50ABfJ6vd5fH7LABCQJBYIh0NhuMRKPWgiRcNZaMxOLxbKJ0RKRQAFh9IVD0diWfj1kTSc83h9vr8wABhOnRJG5dYS5n8nnSg1yklPT7ZF7nIrJEovLgwyEAgA+YFpLrVqK5ss12HWGSK2XWdri8qeoDAgHwQQACIKI7Mgo4wgg90OdbdcuHFMfbAaDwXqvWypTjcmBiaiiamXunONUs5woTmGXqOUWwCWANRgJGCYVi3XQ1txeplitpopcADMdYbXZ1kJL0pLZaeldSJXyGQq+RKKyhAAMACSAzhxYkNXrNAblBJVI81s89Jr9VqDDpgO8Th+NPotNpdPflkAA)
    - [Задание #12](https://www.typescriptlang.org/play?#code/PQKgBI6CCAwggsIFi8IIDhBCsIALgFBi2QxCCEYQZQARBFAhEGTAEMA7ATzEGEQMExQfhBA+EECYQMAZQFcBbAGK8qAYwA0YAKIBHXhQA2AZ2FiwiMACUApgDdtAJ1HbVo9WDYtEgCRBS5RIFEQJlEBcIOMzZA4iAk2eQNIgYPDk-oDcIGwWtnhsLmAubIA8IFYhgPIggGIgiIgAdGCA+CBsgIIgIeQcfuwhQUjJsWxwYFxx8PlsIRowzYBsIPDh-iSAMiBgAMxg+YTRiBjYYABESgKSAEwArFMeWFPacopKkgAuBrzaU+6TUwZ6hsaSALQAjAAMKyDA6Og7NAAO2jwCpmAAvJRaABuV4fL6yeTKX4A6g0EFvT5ac5GEwiMww4EvBFfUxKf7fIRosAAH2kmyhRNJOn0KNMIPQADM0TsAJYAeyoYAZbLZAAoKKgwFQBAAjQySEWC4X8MUGSRMsRKQW4gCUYAA3qswEoAO4snaiAAWYF5CtESky2LVmsmk1EFCUXxmAimE1t7tEHKUbIU2kyCjZAHNec7+EcuWiLWb+RKVSqQe73SKzhQANYJxP2x3TDaQpSurWJsCeqje33+oMh3NbcNmqNomNgEVxjNFrDJ7Rp1u2rNOs404wFtvYEtlv0B4OnZGD+WRzLRihxwuJjtdrUAX3Qm8ZPN590kN0WknVYGxgtDtbRgsbzf+AD5KGAANRNsDr+M7vkDO6Sb-H09gue1bKJeYjXhQsb3o+fwwa+74gtyfL7mA9w-hqAGfOe-YXIcs5gdBD5XBQb7xkAA)
- *.d.ts
    - Написать файл декларации типов для файла [vector.js](https://gist.github.com/byTimo/c51bc16d8c48e676da840f3f892b14c6)
- [React+TS](https://github.com/kontur-courses/typescript/tree/master/react-typescript-task)

