package com.nl.fasty.fasty.Repository;

import java.io.File;
import java.io.IOException;
import java.io.Serializable;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.*;

import com.nl.fasty.fasty.Repository.Props.FastyProps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nl.fasty.fasty.vo.CarVO;
import org.springframework.stereotype.Service;

@Service
public class FastyRepository implements Serializable {
/*
	private static final long serialVersionUID = 1405158254422484545L;
	private static final Logger logger = LoggerFactory.getLogger(FastyRepository.class);
	private final FastyProps props;
	private final ObjectMapper mapper;
	private File storage;
	private Map<Long, CarVO> data;

	public FastyRepository(final FastyProps props, final ObjectMapper mapper) throws IOException {
		super();
		this.props = props;
		this.mapper = mapper;
		this.bootstrap();
		try {
			this.loadStorage();
		} catch (Exception e) {
			logger.error("Não foi possível carregar os dados do arquivos.");
			logger.error(e.getMessage());
		}
		logger.info("Produtos paroquia created!");
	}



	public CarVO findById(Long id) {
		return data.get(id);
	}

	public CarVO save(final CarVO product) throws IOException {

        CarVO produto = findById(product.getId());

		// Cria um id baseado no timestamp
		if (product.getId() == null) {
			product.setId(System.currentTimeMillis());
			product.setQuantidade(0L);
			product.setIndDesabilitado(0);
		} else {

			// Se alterou o preço ou o nome inativa o produto e cria um com o novo preço
			if (!Objects.equals(product.getPreco(), produto.getPreco()) || !Objects.equals(product.getNome(), produto.getNome())) {
				produto.setIndDesabilitado(1);
				product.setId(System.currentTimeMillis());
				product.setQuantidade(0L);
				product.setIndDesabilitado(0);
			}
		}
		if (data == null) {
			data = new HashMap<Long, ProductVO>();
		}
		this.data.put(product.getId(), product);
		this.saveStorage();
		return product;
	}

//    public Product save(final Product product) throws IOException {
//        int nomeJaExiste = 0;
//
//        for (Product produto : data.values()) {
//            if (Objects.equals(produto.getNome(), product.getNome()) && produto.getIndDesabilitado() != 1) {
//                nomeJaExiste = 1;
//                product.setId(produto.getId());
//                break;
//            }
//        }
//
//        if (Objects.isNull(product.getId()) && nomeJaExiste == 0) {
//            product.setId(Instant.now().toEpochMilli());
//            product.setQuantidade(0L);
//            product.setIndDesabilitado(0);
//        } else if (nomeJaExiste == 1 && !Objects.equals(product.getPreco(), this.data.get(product.getId()).getPreco())) {
//            this.data.get(product.getId()).setIndDesabilitado(1);
//            product.setId(Instant.now().toEpochMilli());
//            product.setQuantidade(0L);
//            product.setIndDesabilitado(0);
//        }
//        this.data.put(product.getId(), product);
//        this.saveStorage();
//        return product;
//    }

	public void remove(final Long codId) throws IOException {
		this.data.remove(codId);
		try {
			saveStorage();
		} catch (IOException e) {
			logger.error(e.getMessage());
		}
	}

	public Collection<CarVO> findAll() {
		if (data.isEmpty())
			data = new HashMap<>();
		return new ArrayList<>(data.values());
	}

	private void loadStorage() throws IOException {
		if (!storage.exists()) {
			data = new HashMap<>();
			return;
		}
		TypeReference<HashMap<Long, CarVO>> typeReference = new TypeReference<HashMap<Long, CarVO>>() {
		};
		data = mapper.readValue(storage, typeReference);
	}

	private void bootstrap() throws IOException {
		Path path = Paths.get(props.getPath() + File.separator);
		if (!path.toFile().exists()) {
			if (!path.toFile().mkdirs()) {
				throw new IOException("Verifique os diretórios de configuração");
			}
		}

		this.storage = new File(path.toFile(), props.getFile());

	}

	private void saveStorage() throws IOException {
		if (!storage.exists()) {
			if (!storage.createNewFile()) {
				throw new IOException("Não foi possível criar o arquivo");
			}
			logger.info("Criado arquivo conexoes.json");
		}
		mapper.writeValue(storage, data);
	}
*/
}
