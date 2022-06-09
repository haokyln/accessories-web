package com.cdweb.backend.services;

import com.cdweb.backend.payloads.requests.AttributeRequest;
import com.cdweb.backend.payloads.responses.AttributeResponse;

import java.util.List;

public interface IAttributeService {
    AttributeResponse save(AttributeRequest request);

    AttributeResponse update(AttributeRequest request, Long id);

    List<AttributeResponse> findByIsActiveTrue();


}
