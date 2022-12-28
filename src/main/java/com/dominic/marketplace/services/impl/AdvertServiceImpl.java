package com.dominic.marketplace.services.impl;

import com.dominic.marketplace.models.Advert;
import com.dominic.marketplace.repositories.AdvertRepository;
import com.dominic.marketplace.services.AdvertService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdvertServiceImpl implements AdvertService {

    private static final ExampleMatcher SEARCH_CONDITIONS_MATCH_ALL = ExampleMatcher
            .matching()
            .withMatcher("title", ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
            .withIgnorePaths("id", "description", "price", "location", "advertImages");

    private final AdvertRepository advertRepository;

    public Page<Advert> findAllByQuery(String title, Integer pageNumber, Integer pageSize, String sortDir, String sortBy){
        Pageable paging = PageRequest.of(pageNumber, pageSize, Sort.by(Sort.Direction.fromString(sortDir), sortBy));

        Advert advert = Advert.builder()
                .title(title)
                .build();

        Example<Advert> example = Example.of(advert, SEARCH_CONDITIONS_MATCH_ALL);

        return advertRepository.findAll(example, paging);
    }

    @Override
    public Optional<Advert> findById(Long id) {
        return advertRepository.findById(id);
    }

    @Transactional
    public void save(Advert advert){
        advertRepository.save(advert);
    }

    public void deleteById(Long id){
        advertRepository.deleteById(id);
    }
}
